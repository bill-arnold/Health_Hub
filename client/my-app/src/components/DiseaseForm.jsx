// components/DiseaseForm.jsx
import React, { useState } from 'react';

const DiseaseForm = ({ onNewDisease }) => {
  const [newDisease, setNewDisease] = useState({
    name: '',
    symptoms: '',
    treatment: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming you have a submitDisease function in your api.js
    submitDisease(newDisease)
      .then((submittedDisease) => {
        // Clear the form and update the list of diseases with the new one
        setNewDisease({
          name: '',
          symptoms: '',
          treatment: '',
        });
        onNewDisease(submittedDisease);
      })
      .catch((error) => console.error('Error submitting disease:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className='header'>Add New Disease</h3>
      <label className='data entry'>Name:</label>
      <input className=' entry'
        type="text"
        value={newDisease.name}
        onChange={(e) => setNewDisease({ ...newDisease, name: e.target.value })}
      />
      <label className='data entry'>Symptoms:</label>
      <textarea className='data entry'
        value={newDisease.symptoms}
        onChange={(e) => setNewDisease({ ...newDisease, symptoms: e.target.value })}
      />
      <label className='data entry' >Treatment:</label>
      <textarea className='data entry'
        value={newDisease.treatment}
        onChange={(e) => setNewDisease({ ...newDisease, treatment: e.target.value })}
      />
      <button className='submit button' type="submit">Submit</button>
    </form>
  );
};

export default DiseaseForm;
