import { useState } from 'react';
import { login } from '../services/apiService';
import styles from './Login.module.css'; // Import CSS module

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      console.log(response.data);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h1>Log In</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
