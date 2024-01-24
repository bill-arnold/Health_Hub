// Patients.js
import React, { useState, useEffect } from 'react';
import { getPatients, searchPatients } from '../services/api';

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm) {
      searchPatients();
    } else {
      getPatients();
    }
  }, [searchTerm]);

  return (
    <div>
      <h2>Patients</h2>
      <input
        type="text"
        placeholder="Search patients..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>{patient.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Patients;
