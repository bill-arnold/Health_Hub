// Doctors.js
import React, { useState, useEffect } from 'react';
import { getDoctors, searchDoctors } from '../services/api';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm) {
      searchDoctors();
    } else {
      getDoctors();
    }
  }, [searchTerm]);

  return (
    <div>
      <h2>Doctors</h2>
      <input
        type="text"
        placeholder="Search doctors..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>{doctor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Doctors;
