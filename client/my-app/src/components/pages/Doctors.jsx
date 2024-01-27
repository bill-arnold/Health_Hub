// Doctors.js
import React, { useState, useEffect } from 'react';
import { getDoctors, searchDoctors } from '@src/components/services/api';
import DoctorForm from '@src/components/DoctorsForm';
import Header from "@src/components/Header";

// Doctors.jsx
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
    <div>
      <Header />
      <h2>Doctors</h2>
      <img
        src="https://ih1.redbubble.net/image.5081061387.3170/aps,504x498,medium,transparent-pad,600x600,f8f8f8.jpg"
        alt="doctor Image"
        style={{ width: '100%', maxWidth: '600px' }}
      />
      <DoctorForm
        newDoctor={newDoctor}
        onNewDoctor={handleNewDoctor}
        setNewDoctor={setNewDoctor}
      />

      <div>
        <input
          type="text"
          placeholder="Search doctors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>

      <ul>
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
