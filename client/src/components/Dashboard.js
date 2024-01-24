// components/Dashboard/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from '../services/api';

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/appointments'); // Update with the correct endpoint
        setData(response.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      
      {/* Display relevant information from the fetched data */}
      <div>
        <h2>Recent Appointments</h2>
        <ul>
          {data.map(appointment => (
            <li key={appointment.id}>
              {appointment.doctorName} - {appointment.patientName} {/* Update based on your API response */}
            </li>
          ))}
        </ul>
      </div>

      {/* Add more sections based on your application's needs */}
    </div>
  );
}

export default Dashboard;
