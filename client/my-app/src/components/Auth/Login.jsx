// Login.jsx
import React, { useState, useEffect } from 'react';
import { login, storeToken, isLoggedIn } from '@src/components/services/api';
import { useNavigate } from 'react-router-dom';
import Header from "@src/components/Header";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to Home page if the user is already authenticated
    if (isLoggedIn()) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError(null);
      const token = await login(credentials);
      storeToken(token);
      navigate('/'); // Redirect the user to the Home page
    } catch (error) {
      console.error('Login failed:', error.message);

      if (error.status === 401) {
        setError('Incorrect username or password');
      } else {
        setError('An unexpected error occurred during login');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <Header />
      <h2>Login</h2>
      <label className="login-label">Username: </label>
      <input
        type="text"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <br />
      <label className="login-label">Password: </label>
      <input
        type="password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <br />
      {error && <p className="login-error" style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </div>
  );
};

export default Login;
