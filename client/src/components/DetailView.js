// components/DetailView/DetailView.js
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from '../services/api';

const DetailView = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/appointment/${id}`); // Update with the correct endpoint
        setItem(response.data);
      } catch (error) {
        console.error('Error fetching detail data', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h2>Detail View</h2>
      <Card>
        {/* Render detailed information based on fetched data */}
        {item && (
          <div>
            <p>Doctor: {item.doctorName}</p>
            <p>Patient: {item.patientName}</p>
            {/* Add more details based on your API response */}
          </div>
        )}
      </Card>
    </div>
  );
};

export default DetailView;
