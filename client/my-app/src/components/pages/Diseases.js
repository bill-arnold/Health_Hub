// Diseases.js
import React, { useState, useEffect } from 'react';
import { getDiseases, searchDiseases } from '../services/api';

const Diseases = () => {
  const [diseases, setDiseases] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm) {
      searchDiseases();
    } else {
      getDiseases();
    }
  }, [searchTerm]);

  return (
    <div>
      <h2>Diseases</h2>
      <input
        type="text"
        placeholder="Search diseases..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {diseases.map((disease) => (
          <li key={disease.id}>{disease.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Diseases;
