// Doctors.js
import React, { useState, useEffect } from 'react';
import { getDoctors, searchDoctors } from '../services/api';
import DoctorForm from '@src/components/DoctorForm';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm) {
      searchDoctors(searchTerm)
        .then((searchResults) => setDoctors(searchResults));
    } else {
      getDoctors()
        .then((allDoctors) => setDoctors(allDoctors));
    }
  }, [searchTerm]);

  const handleNewDoctor = (newDoctor) => {
    // Add the new doctor to the list of doctors
    setDoctors((prevDoctors) => [newDoctor, ...prevDoctors]);
  };

  return (
    <div>
      <h2>Doctors</h2>
      <DoctorForm onNewDoctor={handleNewDoctor} />

      <input
        type="text"
        placeholder="Search doctors..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>
            <p>Name: {doctor.name}</p>
            <p>Specialization: {doctor.specialization}</p>
            <p>Experience Years: {doctor.experienceYears}</p>
            <p>Location: {doctor.location}</p>
            <p>Contact Number: {doctor.contactNumber}</p>
            {/* Add more doctor details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Doctors;
