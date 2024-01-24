// Appointments.js
import React, { useState, useEffect } from 'react';
import { getAppointments, searchAppointments } from '../services/api';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm) {
      searchAppointments();
    } else {
      getAppointments();
    }
  }, [searchTerm]);

  return (
    <div>
      <h2>Appointments</h2>
      <input
        type="text"
        placeholder="Search appointments..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>{/* Display appointment details */}</li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
