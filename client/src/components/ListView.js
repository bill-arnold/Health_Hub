// components/ListView/ListView.js
import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import api from '../services/api';

const ListView = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // eslint-disable-next-line no-unused-vars
        const response = await api.get('/list');
        // setData(response.data);
      } catch (error) {
        console.error('Error fetching list data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>List View</h2>
      <Table striped bordered hover>
        {/* Render table rows based on fetched data */}
      </Table>
    </div>
  );
};

export default ListView;
