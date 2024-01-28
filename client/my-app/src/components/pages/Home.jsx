// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from "@src/components/Header";

const Home = () => {
  return (
    <div className=' home-container'>
      <Header />
      <h2>Welcome to the Health Hub</h2>
      <p>Explore the features of the Health Hub application.</p>
      <img
        src="https://p4t4w3c8.rocketcdn.me/wp-content/uploads/2020/02/HealthHub_Logo.png"
        alt="Health Hub Image"
        style={{ width: '100%', maxWidth: '600px' }} // Adjust the width as needed
      />

      <ul>
        <li>
          <Link to="/">Go to Home</Link>
        </li>
        <li>
          <Link to="/doctors">Go to Doctors</Link>
        </li>
        <li>
          <Link to="/diseases">Go to Diseases</Link>
        </li>
        <li>
          <Link to="/appointments">Go to Appointments</Link>
        </li>
        <li>
          <Link to="/patients">Go to Patients</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
