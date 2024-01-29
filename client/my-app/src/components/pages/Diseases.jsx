

import React, { useState, useEffect } from 'react';
import { getDiseases, searchDiseases, addDisease } from '../services/api';
import DiseaseForm from '@src/components/DiseaseForm';
import Header from "@src/components/Header";
import '@src/components/App.css'; 


const Diseases = () => {
  const [diseases, setDiseases] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [newDisease, setNewDisease] = useState({
    name: '',
    symptoms: '',
    treatment: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const diseasesData = searchTerm
          ? await searchDiseases(searchTerm)
          : await getDiseases();

        setDiseases(diseasesData);
        setSearchResults(diseasesData);
      } catch (error) {
        console.error('Error fetching diseases:', error);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleNewDisease = async () => {
    try {
      const submittedDisease = await addDisease(newDisease);
      setDiseases((prevDiseases) => [submittedDisease, ...prevDiseases]);
      setSearchResults((prevResults) => [submittedDisease, ...prevResults]);
      setNewDisease({
        name: '',
        symptoms: '',
        treatment: '',
      });
    } catch (error) {
      console.error('Error adding new disease:', error);
    }
  };

  const handleSearch = () => {
    try {
      const results = diseases.filter((disease) =>
        disease.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } catch (error) {
      console.error('Error during search:', error);
      setSearchResults([]);
    }
  };

  return (
    <div >
      <Header />
      <h2>Diseases</h2>

      <DiseaseForm className='add-form' onNewDisease={handleNewDisease} />

      <div className='search-form'>
        <input
          className='entry'
          type="text"
          placeholder="Search diseases..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="button" onClick={handleSearch} className='search-button'>
          Search
        </button>
      </div>

      <ul className='search-results'>
        {searchResults.map((disease) => (
          <li key={disease.id} className='data-item'>
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
