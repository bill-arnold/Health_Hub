// DoctorForm.js
import React, { useState } from 'react';
import { addDoctor } from '../services/api';

const DoctorForm = () => {
  const [name, setName] = useState('');
  const [specialization, setSpecialization] = useState('');

  const handleSubmit = async () => {
    try {
      await addDoctor({ name, specialization });
      // Handle successful form submission
    } catch (error) {
      console.error('Error adding doctor:', error);
      // Handle form submission error
    }
  };

  return (
    <div>
      <h2>Add Doctor</h2>
      <form>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Specialization:</label>
        <input type="text" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
        <button type="button" onClick={handleSubmit}>
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default DoctorForm;
