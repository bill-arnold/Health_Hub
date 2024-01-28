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
    <form onSubmit={handleSubmit} className="add-form">
      <h3 className='header'>Schedule Appointment</h3>

      <label className='data entry'>
        Doctor:
        <select
          value={formData.doctorId}
          onChange={(e) => setFormData({ ...formData, doctorId: e.target.value })}
        >
          <option value="" disabled>Select a doctor</option>
          {doctors.map(doctor => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.name}
            </option>
          ))}
        </select>
      </label>

      <label className='data entry'>
        Patient:
        <select
          value={formData.patientId}
          onChange={(e) => setFormData({ ...formData, patientId: e.target.value })}
        >
          <option value="" disabled>Select a patient</option>
          {patients.map(patient => (
            <option key={patient.id} value={patient.id}>
              {patient.name}
            </option>
          ))}
        </select>
      </label>

      <label className='data entry'>
        Disease:
        <select
          value={formData.diseaseId}
          onChange={(e) => setFormData({ ...formData, diseaseId: e.target.value })}
        >
          <option value="" disabled>Select a disease</option>
          {diseases.map(disease => (
            <option key={disease.id} value={disease.id}>
              {disease.name}
            </option>
          ))}
        </select>
      </label>

      <label className='data entry'>
        Appointment Date:
        <input className=' entry'
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </label>

      <button className='submit button' type="submit">Schedule Appointment</button>
    </form>
  );
};

export default AppointmentForm;
