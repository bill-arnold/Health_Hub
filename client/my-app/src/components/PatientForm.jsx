// components/PatientForm.js
import React, { useState } from 'react';

const PatientForm = ({ onNewPatient }) => {
  const [newPatient, setNewPatient] = useState({
    name: '',
    age: '',
    gender: '',
    contactNumber: '',
    address: '',
  });

  const handleChange = (field, value) => {
    setNewPatient((prevPatient) => ({ ...prevPatient, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming you have a submitPatient function in your api.js
    submitPatient(newPatient)
      .then((submittedPatient) => {
        // Clear the form and update the list of patients with the new one
        setNewPatient({
          name: '',
          age: '',
          gender: '',
          contactNumber: '',
          address: '',
        });
        onNewPatient(submittedPatient);
      })
      .catch((error) => console.error('Error submitting patient:', error));
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3 className='header'>Add New Patient</h3>
      <label className='data entry'>Name:</label>
      <input className=' entry'
        type="text"
        value={newPatient.name}
        onChange={(e) => handleChange('name', e.target.value)}
      />
      <label className='data entry'>Age:</label>
      <input className=' entry'
        type="text"
        value={newPatient.age}
        onChange={(e) => handleChange('age', e.target.value)}
      />
      <label className='data entry'>Gender:</label>
      <input className=' entry'
        type="text"
        value={newPatient.gender}
        onChange={(e) => handleChange('gender', e.target.value)}
      />
      <label className='data entry'>Contact Number:</label>
      <input className=' entry'
        type="text"
        value={newPatient.contactNumber}
        onChange={(e) => handleChange('contactNumber', e.target.value)}
      />
      <label className='data entry'>Address:</label>
      <input className=' entry'
        type="text"
        value={newPatient.address}
        onChange={(e) => handleChange('address', e.target.value)}
      />
      <button  className='submit button'type="submit">Submit</button>
    </form>
  );
};

export default PatientForm;
