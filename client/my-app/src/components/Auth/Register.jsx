
import React, { useState } from 'react';
import { register } from '../services/api';
import Header from "@src/components/Header";

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationDate, setRegistrationDate] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      setLoading(true); // Set loading state to true when the registration request starts

      
      const response = await register({
        username,
        email,
        password,
        registrationDate,
      });

      // Handle successful registration

    } catch (error) {
      console.error('Registration failed:', error);
      // Handle registration error
    } finally {
      setLoading(false); // Set loading state to false when the registration request completes, whether successful or not
    }
  };

  return (
    <div className="register-container">
      <Header/>
      <h2>Register</h2>
      <form onSubmit={handleRegister} className="register-form">
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <label>Registration Date:</label>
        <input type="date" value={registrationDate} onChange={(e) => setRegistrationDate(e.target.value)} />
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default Register;
