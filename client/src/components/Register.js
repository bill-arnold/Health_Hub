// components/Auth/Register.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


import api from '../services/api';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const Register = () => {
  const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(schema) });
  const [serverError, setServerError] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await api.post('/register', data);
      console.log(response.data);
    } catch (error) {
      console.error('Registration failed', error);
      setServerError('Registration failed. Please try again.');
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" name="username" ref={register} />
        <p className="error">{errors.username?.message}</p>
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" name="email" ref={register} />
        <p className="error">{errors.email?.message}</p>
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" ref={register} />
        <p className="error">{errors.password?.message}</p>
      </Form.Group>
      {serverError && <p className="error">{serverError}</p>}
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default Register;
