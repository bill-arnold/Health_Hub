// Patients.js
import React, { useState, useEffect } from 'react';
import { getPatients, searchPatients } from '../services/api';
import PatientForm from '@src/components/PatientForm';

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm) {
      searchPatients(searchTerm)
        .then((searchResults) => setPatients(searchResults));
    } else {
      getPatients()
        .then((allPatients) => setPatients(allPatients));
    }
  }, [searchTerm]);

  const handleNewPatient = (newPatient) => {
    // Add the new patient to the list of patients
    setPatients((prevPatients) => [newPatient, ...prevPatients]);
  };

  return (
    <div>
      <h2>Patients</h2>
      <PatientForm onNewPatient={handleNewPatient} />

      <input
        type="text"
        placeholder="Search patients..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            <p>Name: {patient.name}</p>
            <p>Age: {patient.age}</p>
            <p>Gender: {patient.gender}</p>
            <p>Contact Number: {patient.contactNumber}</p>
            <p>Address: {patient.address}</p>
            {/* Add more patient details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Patients;
