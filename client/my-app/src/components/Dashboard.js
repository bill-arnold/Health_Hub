// Dashboard.js
import React, { useState, useEffect } from 'react';
import { getDashboardData } from '../services/api';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDashboardData();
        setDashboardData(data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {dashboardData && (
        <div>
          {/* Display relevant information from dashboardData */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
