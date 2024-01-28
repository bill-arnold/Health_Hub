// Doctors.js
import React, { useState, useEffect } from 'react';
import { getDoctors, searchDoctors } from '@src/components/services/api';
import DoctorForm from '@src/components/DoctorsForm';
import Header from "@src/components/Header";
import '@src/components/App.css';

//import React, { useState, useEffect } from 'react';
//import { getDoctors, searchDoctors, addDoctor } from '../services/api';
//import DoctorForm from '@/components/DoctorForm';
//import Header from "@src/components/Header";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const doctorsData = searchTerm
          ? await searchDoctors(searchTerm)
          : await getDoctors();

        setDoctors(doctorsData);
        setSearchResults(doctorsData); // Initialize search results with all doctors
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleNewDoctor = async () => {
    try {
      // Add the new doctor to the list of doctors
      const submittedDoctor = await addDoctor(newDoctor);
      setDoctors((prevDoctors) => [submittedDoctor, ...prevDoctors]);
      setSearchResults((prevResults) => [submittedDoctor, ...prevResults]);
      // Clear the form after successful submission
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
    // Filter doctors based on search term
    const results = doctors.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className='container'>
      <Header />
      <h2>Doctors</h2>
      
      <DoctorForm className='add'
        newDoctor={newDoctor}
        onNewDoctor={handleNewDoctor}
        setNewDoctor={setNewDoctor}
      />

      <div className=' input'>
        <input className=' entry'
          type="text"
          placeholder="Search doctors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="button" onClick={handleSearch} className='search button'>
          Search
        </button>
      </div>

      <ul className='search results'>
        {searchResults.map((doctor) => (
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
