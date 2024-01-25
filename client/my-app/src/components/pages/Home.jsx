// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Health Hub</h2>
      <p>Explore the features of the Health Hub application.</p>
      <h3><Link to="/doctors">Go to Doctors</Link></h3>
      <h4><Link to="/diseases">Go to Diseases</Link></h4>
      <h5><Link to="/home">Go to Home</Link></h5>
      <h6><Link to="/patients">Go to Patients</Link></h6>
      <h6><Link to="/appointments">Go to Appointments</Link></h6>
    </div>
  );
};

export default Home;
