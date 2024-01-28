// components/DoctorForm.js
import React, { useState } from 'react';


const DoctorForm = ({ newDoctor, onNewDoctor, setNewDoctor }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Invoke the onNewDoctor function with the newDoctor data
    onNewDoctor(newDoctor);
  };

  return (
    <form onSubmit={handleSubmit}className="add-form">
      <h3 className='header'>Add New Doctor</h3>
      <label className='data entry'>Name:</label>
      <input className=' entry'
        type="text"
        value={newDoctor.name}
        onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
      />
      <label className='data entry'>Specialization:</label>
      <input className=' entry'
        type="text"
        value={newDoctor.specialization}
        onChange={(e) =>
          setNewDoctor({ ...newDoctor, specialization: e.target.value })
        }
      />
      <label className='data entry'>Experience Years:</label>
      <input className=' entry'
        type="text"
        value={newDoctor.experienceYears}
        onChange={(e) =>
          setNewDoctor({ ...newDoctor, experienceYears: e.target.value })
        }
      />
      <label className='data entry'>Location:</label>
      <input className=' entry'
        type="text"
        value={newDoctor.location}
        onChange={(e) => setNewDoctor({ ...newDoctor, location: e.target.value })}
      />
      <label className='data entry'>Contact Number:</label>
      <input className=' entry'
        type="text"
        value={newDoctor.contactNumber}
        onChange={(e) =>
          setNewDoctor({ ...newDoctor, contactNumber: e.target.value })
        }
      />
      <button className='submit button' type="submit">Submit</button>
    </form>
  );
};

export default DoctorForm;
