// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import firebaseConfig from '../config/firebaseConfig.json'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
analytics
const auth = getAuth(app);
const db = getFirestore(app);

/**
 * Registers a new user with email and password.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise<Object>} User data or error message.
 */
export async function registerUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save user data to Firestore
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      createdAt: new Date().toISOString(),
    });

    return { uid: user.uid, email: user.email };
  } catch (error) {
    return { error: error.message };
  }
}

/**
 * Logs in a user with email and password.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise<Object>} User data or error message.
 */
export async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Retrieve additional user data from Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    const userData = userDoc.data();

    return { uid: user.uid, email: user.email, ...userData };
  } catch (error) {
    return { error: error.message };
  }
}

/**
 * Validates the current JWT token for the authenticated user.
 * @returns {Promise<Object>} User data or error message.
 */
export async function validateJWT() {
  try {
    const user = auth.currentUser;

    if (!user) {
      throw new Error("No authenticated user found.");
    }

    const idToken = await user.getIdToken();
    return { uid: user.uid, email: user.email, idToken };
  } catch (error) {
    return { error: error.message };
  }
}

export class UserDataObserver {
  userData;
  success;
  fail;
  authorized = (callback) => {
    this.success = callback
    return this;
  }
  unauthorized =(callback) => {
    this.fail = callback
    return this;
  }
  subscribe = () => {
    return auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        const doc = doc(db, "users", currentUser.uid)
        const userDoc = await getDoc(doc);
        this.userData = userDoc.data();
        this.authorized(this.userData)
        return this.userData
      } else {
        this.userData = null
        this.unauthorized(null);
        return null
      }
  })
}
}