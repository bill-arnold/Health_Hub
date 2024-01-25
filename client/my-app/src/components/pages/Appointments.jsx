// pages/Appointments.js
import React, { useState, useEffect } from 'react';
import AppointmentForm from '@src/components/AppointmentForm';
import Header from "@src/components/Header";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch appointments from the backend when the component mounts or when the search term changes
    fetchAppointments();
  }, [searchTerm]);

  const fetchAppointments = () => {
    fetch(`http://127.0.0.1:5555/appointments?search=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        setAppointments(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching appointments:', error));
  };

  const handleDeleteAppointment = (appointmentId) => {
    fetch(`http://127.0.0.1:5555/appointments/${appointmentId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete appointment');
        }
        // Update the appointments state after successful deletion
        setAppointments(prevAppointments => prevAppointments.filter(appointment => appointment.id !== appointmentId));
      })
      .catch(error => console.error('Error deleting appointment:', error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Trigger a callback to fetch and update the list of appointments
    fetchAppointments();
  };

  return (
    <div className="appointments-container">
      <Header/>
      <h2 className="appointments-heading">Appointments</h2>
      <AppointmentForm onAppointmentAdded={fetchAppointments} />

      <form onSubmit={handleSubmit} className="appointments-heading">
        <input
          type="text"
          placeholder="Search appointments..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {loading ? (
        <p className="loading-message">Loading appointments...</p>
      ) : (
        <ul className="appointments-list">
          {appointments.map(appointment => (
            <li key={appointment.id} className="appointment-item">
              <div>
                <p>Doctor: {appointment.doctor.name}</p>
                <p>Patient: {appointment.patient.name}</p>
                <p>Disease: {appointment.disease.name}</p>
                <p>Date: {appointment.date}</p>
                {/* Add more appointment details as needed */}
              </div>
              <button onClick={() => handleDeleteAppointment(appointment.id)}>
                Delete Appointment
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Appointments;
