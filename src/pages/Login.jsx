import { useState } from 'react';
import { useUser } from '../hooks/useUser';
import { loginUser } from '../services/firebase';
import { FormInputs } from "../components/FormInputSection"
import { title, inputs, messages } from "./Login.content.json"
import ResponseLabel from '../components/ResponseLabel'
import { FormSubmitJob } from '../utils/formUtils'
import styles from './Login.module.css'; // Import CSS module

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useUser();

  const onBlur = (e) => {
    console.log(e.target.form)
    const formData = new FormData(e.target.form)
    const formEmail = formData.get("email")
    const formPw = formData.get("password")
    if(email != formEmail) setEmail(formEmail)
    if(formPw != password) setPassword(formPw)
  }
  /**
   * Example of integration with a frontend login page.
   */
  async function handleServerlessLogin() {
    const response =  await loginUser(email, password);
    return response
  }

  async function handleSumbit (e) {
    setUser(await new FormSubmitJob(e)
      .formAction(handleServerlessLogin)
      .fail(setError)
      .loadingStateChanged(setLoading)
      .serverMessage(setMessage)
      .submit())
  }
  // const handleLogin = async () => {
  //   try {
  //     const response = await login(email, password);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error('Login failed', error);
  //   }
  // };
  return (
    <form onSubmit={handleSumbit} className={styles.loginContainer}>
      <h1>{title}</h1>
      {message && <ResponseLabel>{message}</ResponseLabel>}
      {error && <ResponseLabel type={'error'}>{error}</ResponseLabel>}
      {!loading && user?.firstName 
        ? <ResponseLabel>{messages.success} {user.firstName} {user.lastName}</ResponseLabel>
        : <FormInputs {...{ inputs, onBlur }}/>}
      <button disabled={user} type="submit">{title}</button>
    </form>
  );
};

export default Login;
