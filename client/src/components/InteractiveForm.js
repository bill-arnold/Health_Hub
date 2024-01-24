// components/InteractiveForm/InteractiveForm.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import api from '../services/api';

const InteractiveForm = () => {
  const handleFormSubmit = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await api.post('/submit-form', {});
      // console.log(response.data);
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div>
      <h2>Interactive Form</h2>
      <Form>
        {/* Render form fields based on data structure */}
        <Button variant="primary" type="button" onClick={handleFormSubmit}>
          Submit Form
        </Button>
      </Form>
    </div>
  );
};

export default InteractiveForm;
