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
      <h3>Add New Disease</h3>
      <label>Name:</label>
      <input
        type="text"
        value={newDisease.name}
        onChange={(e) => setNewDisease({ ...newDisease, name: e.target.value })}
      />
      <label>Symptoms:</label>
      <textarea
        value={newDisease.symptoms}
        onChange={(e) => setNewDisease({ ...newDisease, symptoms: e.target.value })}
      />
      <label>Treatment:</label>
      <textarea
        value={newDisease.treatment}
        onChange={(e) => setNewDisease({ ...newDisease, treatment: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default DiseaseForm;
