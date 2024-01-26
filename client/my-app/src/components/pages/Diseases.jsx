import React, { useState, useEffect } from 'react';
import { getDiseases, searchDiseases, addDisease } from '../services/api';
import DiseaseForm from '@src/components/DiseaseForm';
import Header from "@src/components/Header";

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
        setSearchResults(diseasesData); // Initialize search results with all diseases
      } catch (error) {
        console.error('Error fetching diseases:', error);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleNewDisease = async () => {
    try {
      // Add the new disease to the list of diseases
      const submittedDisease = await addDisease(newDisease);
      setDiseases((prevDiseases) => [submittedDisease, ...prevDiseases]);
      setSearchResults((prevResults) => [submittedDisease, ...prevResults]);
      // Clear the form after successful submission
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
    // Filter diseases based on search term
    const results = diseases.filter((disease) =>
      disease.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <Header />
      <h2>Diseases</h2>
      {/* Add an image or relevant content for diseases if needed */}
      <DiseaseForm
        newDisease={newDisease}
        onNewDisease={handleNewDisease}
        setNewDisease={setNewDisease}
      />

      <div>
        <input
          type="text"
          placeholder="Search diseases..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>

      <ul>
        {searchResults.map((disease) => (
          <li key={disease.id}>
            <p>Name: {disease.name}</p>
            <p>Symptoms: {disease.symptoms}</p>
            <p>Treatment: {disease.treatment}</p>
            {/* Add more disease details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Diseases;
