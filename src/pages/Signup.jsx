import { useState, useEffect } from "react";
import { registerUser } from "../services/firebase"
import { title, inputs} from "./Signup.content.json"
import { FormInputs } from "../components/FormInputSection"
import ResponseLabel from '../components/ResponseLabel'
import { getEventFormData, FormSubmitJob } from '../utils/formUtils'
import styles from "./SignUp.module.css"; // Import CSS Module

const blankFormData = {
  firstName: "",
  lastName: "",
  address: "",
  phoneNumber: "",
  email: "",
  password: "",
  role: "Freelancer",
}

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();
  const [error, setError] = useState();
  const [formData, setFormData] = useState(blankFormData);
  
  useEffect(() => {}, [loading, message, error, formData])

  const onBlur = (e) => {
      setFormData({...formData, ...getEventFormData(e)})
  }
  async function handleServerlessSignUp(formData) {
    const { firstName, lastName, address, phoneNumber, email, password, role } = formData;
  
    const additionalData = {
      firstName,
      lastName,
      address,
      phoneNumber,
      role,
    };

    return await registerUser(email, password, additionalData);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await new FormSubmitJob(e)
      .formAction(handleServerlessSignUp)
      .loadingStateChanged(setLoading)
      .serverMessage(setMessage)
      .fail(setError)
      .submit()
  };
  console.log({ error })
  return (
    <div className={styles.formContainer}>
      <h1>{title}</h1>
      {error && <ResponseLabel type="error">{error}</ResponseLabel>}
        {message && <ResponseLabel type="success">{message}</ResponseLabel>}
        <form onSubmit={handleSubmit}>
        <FormInputs {...{ inputs, onBlur}}/> 
        <button disabled={loading || error} type="submit">{title}</button>
      </form>
    </div>
  );
};

export default SignUp;
