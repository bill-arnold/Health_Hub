// Patients.jsx

import React, { useState, useEffect } from 'react';
import { getPatients, searchPatients } from '../services/api';
import PatientForm from '@src/components/PatientForm';
import Header from "@src/components/Header";
import '@src/components/App.css';


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
        setSearchResults(patientsData);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleNewPatient = (newPatient) => {
    setPatients((prevPatients) => [newPatient, ...prevPatients]);
    setSearchResults((prevResults) => [newPatient, ...prevResults]);
  };

  const handleSearch = () => {
    const results = patients.filter((patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div >
      <Header />
      <h2>Patients</h2>
      <PatientForm className='add-form' onNewPatient={handleNewPatient} />

      <div className='search-form'>
        <input
          className='entry'
          type="text"
          placeholder="Search patients..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="button" onClick={handleSearch} className='search-button'>
          Search
        </button>
      </div>

      <ul className='search-results'>
        {searchResults.map((patient) => (
          <li key={patient.id} className='data-item'>
            <p>Name: {patient.name}</p>
            <p>Age: {patient.age}</p>
            <p>Gender: {patient.gender}</p>
            <p>Contact Number: {patient.contactNumber}</p>
            <p>Address: {patient.address}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Patients;
