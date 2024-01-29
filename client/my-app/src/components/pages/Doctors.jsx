// Doctors.jsx

import React, { useState, useEffect } from 'react';
import { getDoctors, searchDoctors, addDoctor } from '@src/components/services/api';
import DoctorForm from '@src/components/DoctorsForm';
import Header from "@src/components/Header";
import '@src/components/App.css';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [newDoctor, setNewDoctor] = useState({
    name: '',
    specialization: '',
    experienceYears: '',
    location: '',
    contactNumber: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const doctorsData = searchTerm
          ? await searchDoctors(searchTerm)
          : await getDoctors();

        setDoctors(doctorsData);
        setSearchResults(doctorsData);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleNewDoctor = async () => {
    try {
      const submittedDoctor = await addDoctor(newDoctor);
      setDoctors((prevDoctors) => [submittedDoctor, ...prevDoctors]);
      setSearchResults((prevResults) => [submittedDoctor, ...prevResults]);
      setNewDoctor({
        name: '',
        specialization: '',
        experienceYears: '',
        location: '',
        contactNumber: '',
      });
    } catch (error) {
      console.error('Error adding new doctor:', error);
    }
  };

  const handleSearch = () => {
    try {
      const results = doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } catch (error) {
      console.error('Error during search:', error);
      setSearchResults([]);
    }
  };

  return (
    <div >
      <Header />
      <h2>Doctors</h2>

      <DoctorForm
        className='add-form' // Similar to 'add' in Patients.jsx
        newDoctor={newDoctor}
        onNewDoctor={handleNewDoctor}
        setNewDoctor={setNewDoctor}
      />

      <div className='search-form'> {/* Similar to 'input' in Patients.jsx */}
        <input
          className='entry'
          type="text"
          placeholder="Search doctors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="button" onClick={handleSearch} className='search-button'> {/* Similar to 'button' in Patients.jsx */}
          Search
        </button>
      </div>

      {loading ? (
        <p className='loading-message'>Loading...</p> 
      ) : (
        <>
          <div className='search-results'>
            <h3>Search Results</h3>
            <ul className='data-container'> {/* Similar to 'search results' in Patients.jsx */}
              {searchResults.map((doctor) => (
                <li key={doctor.id} className='data-item'> {/* Similar to 'results' in Patients.jsx */}
                  <p>Name: {doctor.name}</p>
                  <p>Specialization: {doctor.specialization}</p>
                  <p>Experience Years: {doctor.experienceYears}</p>
                  <p>Location: {doctor.location}</p>
                  <p>Contact Number: {doctor.contactNumber}</p>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Doctors;
