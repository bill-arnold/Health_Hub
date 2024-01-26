// components/AppointmentForm.jsx
import React, { useState, useEffect } from 'react';
import { getDoctors, getPatients, getDiseases, submitAppointment } from '@/components/services/api';

const AppointmentForm = ({ onAppointmentAdded }) => {
  const [formData, setFormData] = useState({
    doctorId: '',
    patientId: '',
    diseaseId: '',
    date: '',
  });

  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [diseases, setDiseases] = useState([]);

  useEffect(() => {
    // Fetch doctors, patients, and diseases when the component mounts
    fetchDoctors();
    fetchPatients();
    fetchDiseases();
  }, []);

  const fetchDoctors = () => {
    getDoctors()
      .then(data => setDoctors(data))
      .catch(error => console.error('Error fetching doctors:', error));
  };

  const fetchPatients = () => {
    getPatients()
      .then(data => setPatients(data))
      .catch(error => console.error('Error fetching patients:', error));
  };

  const fetchDiseases = () => {
    getDiseases()
      .then(data => setDiseases(data))
      .catch(error => console.error('Error fetching diseases:', error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming you have a submitAppointment function in your api.js
    submitAppointment(formData)
      .then((submittedAppointment) => {
        // Clear the form and trigger a callback to update the list of appointments
        setFormData({
          doctorId: '',
          patientId: '',
          diseaseId: '',
          date: '',
        });
        // Trigger the callback only if it's provided (for adding new appointment)
        onAppointmentAdded && onAppointmentAdded();
      })
      .catch((error) => console.error('Error submitting appointment:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Schedule Appointment</h3>
      
      {/* Doctor, Patient, Disease selection logic here */}

      <label>
        Appointment Date:
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </label>

      <button type="submit">Schedule Appointment</button>
    </form>
  );
};

export default AppointmentForm;
