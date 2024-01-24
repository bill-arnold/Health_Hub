// components/ScheduleAppointment/ScheduleAppointment.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import api from '../services/api';

const ScheduleAppointment = () => {
  const handleScheduleAppointment = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await api.post('/schedule-appointment', {});
      // console.log(response.data);
    } catch (error) {
      console.error('Error scheduling appointment', error);
    }
  };

  return (
    <div>
      <h2>Schedule Appointment</h2>
      <Form>
        {/* Similar form fields as the Login component */}
        <Button variant="primary" type="button" onClick={handleScheduleAppointment}>
          Schedule Appointment
        </Button>
      </Form>
    </div>
  );
};

export default ScheduleAppointment;
