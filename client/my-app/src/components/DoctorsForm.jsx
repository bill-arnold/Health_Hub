// components/DoctorForm.js
import React, { useState } from 'react';

const DoctorForm = ({ onNewDoctor }) => {
  const [newDoctor, setNewDoctor] = useState({
    name: '',
    specialization: '',
    experienceYears: '',
    location: '',
    contactNumber: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming you have a submitDoctor function in your api.js
    submitDoctor(newDoctor)
      .then((submittedDoctor) => {
        // Clear the form and update the list of doctors with the new one
        setNewDoctor({
          name: '',
          specialization: '',
          experienceYears: '',
          location: '',
          contactNumber: '',
        });
        onNewDoctor(submittedDoctor);
      })
      .catch((error) => console.error('Error submitting doctor:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Doctor</h3>
      <label>Name:</label>
      <input
        type="text"
        value={newDoctor.name}
        onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
      />
      <label>Specialization:</label>
      <input
        type="text"
        value={newDoctor.specialization}
        onChange={(e) => setNewDoctor({ ...newDoctor, specialization: e.target.value })}
      />
      <label>Experience Years:</label>
      <input
        type="text"
        value={newDoctor.experienceYears}
        onChange={(e) => setNewDoctor({ ...newDoctor, experienceYears: e.target.value })}
      />
      <label>Location:</label>
      <input
        type="text"
        value={newDoctor.location}
        onChange={(e) => setNewDoctor({ ...newDoctor, location: e.target.value })}
      />
      <label>Contact Number:</label>
      <input
        type="text"
        value={newDoctor.contactNumber}
        onChange={(e) => setNewDoctor({ ...newDoctor, contactNumber: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default DoctorForm;
