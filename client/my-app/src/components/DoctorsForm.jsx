// components/DoctorForm.js
import React, { useState } from 'react';

const DoctorForm = ({ newDoctor, onNewDoctor, setNewDoctor }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Invoke the onNewDoctor function with the newDoctor data
    onNewDoctor(newDoctor);
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
        onChange={(e) =>
          setNewDoctor({ ...newDoctor, specialization: e.target.value })
        }
      />
      <label>Experience Years:</label>
      <input
        type="text"
        value={newDoctor.experienceYears}
        onChange={(e) =>
          setNewDoctor({ ...newDoctor, experienceYears: e.target.value })
        }
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
        onChange={(e) =>
          setNewDoctor({ ...newDoctor, contactNumber: e.target.value })
        }
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default DoctorForm;
