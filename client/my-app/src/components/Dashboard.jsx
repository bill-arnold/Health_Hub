
import React from 'react';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <Link to="/appointments">
          <div>
            <h3>Appointments</h3>
            <p>View and manage your appointments</p>
          </div>
        </Link>
      </div>
      <div>
        <Link to="/doctors">
          <div>
            <h3>Doctors</h3>
            <p>Search for doctors and manage your doctor list</p>
          </div>
        </Link>
      </div>
      <div>
        <Link to="/patients">
          <div>
            <h3>Patients</h3>
            <p>Search for patients and manage your patient list</p>
          </div>
        </Link>
      </div>
      <div>
        <Link to="/diseases">
          <div>
            <h3>Diseases</h3>
            <p>Search for diseases and manage your disease list</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
