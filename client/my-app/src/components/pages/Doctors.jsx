// Doctors.js
import React, { useState, useEffect } from 'react';
import { getDoctors, searchDoctors } from '../services/api';
import DoctorForm from '@/components/DoctorsForm';
import Header from "@src/components/Header";

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
      <Header/>
      <h2>Doctors</h2>
         <img
  src="https://ih1.redbubble.net/image.5081061387.3170/aps,504x498,medium,transparent-pad,600x600,f8f8f8.jpg"
  alt="doctor Image"
  style={{ width: '100%', maxWidth: '600px' }} // Adjust the width as needed
/>
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
