// pages/Appointments.js
import React, { useState, useEffect } from 'react';
import AppointmentForm from '@src/components/AppointmentForm';
import Header from "@src/components/Header";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch appointments from the backend when the component mounts
    fetchAppointments();
  }, []);

  const fetchAppointments = () => {
    fetch('http://127.0.0.1:5555/appointments')
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

  const handleNewAppointment = (newAppointment) => {
    // Add the new appointment to the list of appointments
    setAppointments((prevAppointments) => [newAppointment, ...prevAppointments]);
  };

  return (
    <div>
      <Header/>
      <h2>Appointments</h2>
      <AppointmentForm onAppointmentAdded={handleNewAppointment} />

      {loading ? (
        <p>Loading appointments...</p>
      ) : (
        <ul>
          {appointments.map(appointment => (
            <li key={appointment.id}>
              <div>
                <p>Doctor: {appointment.doctorName}</p>
                <p>Patient: {appointment.patientName}</p>
                <p>Disease: {appointment.diseaseName}</p>
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
