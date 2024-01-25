// Login.js
import React, { useState } from 'react';
import { login } from '../services/api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      setLoading(true); // Set loading state to true when the login request starts

      const response = await login({ username, password });

      // Handle successful login, e.g., set user token in state or local storage

    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error
    } finally {
      setLoading(false); // Set loading state to false when the login request completes, whether successful or not
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
