

import React, { useState, useEffect } from 'react';
import { getAppointments, submitAppointment, searchAppointments, deleteAppointment } from '../services/api';
import AppointmentForm from '@src/components/AppointmentForm';
import Header from "@src/components/Header";
import '@src/components/App.css'; 


const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    doctor: '',
    patient: '',
    disease: '',
    date: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const appointmentsData = searchTerm
          ? await searchAppointments(searchTerm)
          : await getAppointments();

        setAppointments(appointmentsData);
        setSearchResults(appointmentsData);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleNewAppointment = async () => {
    try {
      const submittedAppointment = await submitAppointment(newAppointment);
      setAppointments((prevAppointments) => [submittedAppointment, ...prevAppointments]);
      setSearchResults((prevResults) => [submittedAppointment, ...prevResults]);
      setNewAppointment({
        doctor: '',
        patient: '',
        disease: '',
        date: '',
      });
    } catch (error) {
      console.error('Error adding new appointment:', error);
    }
  };

  const handleSearch = () => {
    const results = appointments.filter((appointment) =>
      appointment.doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.date.includes(searchTerm)
    );
    setSearchResults(results);
  };

  const handleDeleteAppointment = async (appointmentId) => {
    try {
      await deleteAppointment(appointmentId);
      setAppointments((prevAppointments) => prevAppointments.filter(appointment => appointment.id !== appointmentId));
      setSearchResults((prevResults) => prevResults.filter(appointment => appointment.id !== appointmentId));
    } catch (error) {
      console.error(`Error deleting appointment with id ${appointmentId}:`, error);
    }
  };

  return (
    <div >
      <Header />
      <h2 className='header'>Appointments</h2>
      <AppointmentForm
        className='add-form'
        newAppointment={newAppointment}
        onNewAppointment={handleNewAppointment}
        setNewAppointment={setNewAppointment}
      />

      <div className='search-form'>
        <input
          className='entry'
          type="text"
          placeholder="Search appointments..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="button" onClick={handleSearch} className='search-button'>
          Search
        </button>
      </div>

      <ul className='search-results'>
        {searchResults.map((appointment) => (
          <li key={appointment.id} className='data-item'>
            <p>Doctor: {appointment.doctor.name}</p>
            <p>Patient: {appointment.patient.name}</p>
            <p>Disease: {appointment.disease.name}</p>
            <p>Date: {appointment.date}</p>
            <button className='search-button' onClick={() => handleDeleteAppointment(appointment.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
