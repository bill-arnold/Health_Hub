// Inside Patients.js
import React, { useState, useEffect } from 'react';
import { getPatients, searchPatients } from '../services/api';
import PatientForm from '@src/components/PatientForm';
import Header from "@src/components/Header";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const patientsData = searchTerm
          ? await searchPatients(searchTerm)
          : await getPatients();

        setPatients(patientsData);
        setSearchResults(patientsData); // Initialize search results with all patients
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleNewPatient = (newPatient) => {
    // Add the new patient to the list of patients
    setPatients((prevPatients) => [newPatient, ...prevPatients]);
    setSearchResults((prevResults) => [newPatient, ...prevResults]);
  };

  const handleSearch = () => {
    // Filter patients based on search term
    const results = patients.filter((patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <Header />
      <h2>Patients</h2>
      {/* Add your image here */}
      <PatientForm  className='add'onNewPatient={handleNewPatient} />

      <div className=' input'>
        <input
          type="text"
          placeholder="Search patients..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>

      <ul className='search results'>
        {searchResults.map((patient) => (
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
