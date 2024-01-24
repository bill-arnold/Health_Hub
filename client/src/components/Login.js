// components/Auth/Login.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


import api from '../services/api';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const Login = () => {
  const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(schema) });
  const [serverError, setServerError] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await api.post('/login', data);
      console.log(response.data);
    } catch (error) {
      console.error('Login failed', error);
      setServerError('Invalid credentials. Please try again.');
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" name="username" ref={register} />
        <p className="error">{errors.username?.message}</p>
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" ref={register} />
        <p className="error">{errors.password?.message}</p>
      </Form.Group>
      {serverError && <p className="error">{serverError}</p>}
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default Login;
