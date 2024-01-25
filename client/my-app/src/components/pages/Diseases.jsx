// Diseases.js
import React, { useState, useEffect } from 'react';
import { getDiseases, searchDiseases } from '../services/api';
import DiseaseForm from '@src/components/DiseaseForm';
import Header from "@src/components/Header";

const Diseases = () => {
  const [diseases, setDiseases] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm) {
      searchDiseases(searchTerm)
        .then((searchResults) => setDiseases(searchResults));
    } else {
      getDiseases()
        .then((allDiseases) => setDiseases(allDiseases));
    }
  }, [searchTerm]);

  const handleNewDisease = (newDisease) => {
    // Add the new disease to the list of diseases
    setDiseases((prevDiseases) => [newDisease, ...prevDiseases]);
  };

  return (
    <div>
      <Header/>
      <h2>Diseases</h2>
      <DiseaseForm onNewDisease={handleNewDisease} />

      <input
        type="text"
        placeholder="Search diseases..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {diseases.map((disease) => (
          <li key={disease.id}>
            <p>Name: {disease.name}</p>
            <p>Symptoms: {disease.symptoms}</p>
            <p>Treatment: {disease.treatment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Diseases;
