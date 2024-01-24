// components/Search/Search.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import api from '../services/api';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await api.get(`/search?q=${searchQuery}`);
      // setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching data', error);
    }
  };

  return (
    <div>
      <h2>Search</h2>
      <Form>
        <Form.Group controlId="formSearch">
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter search query"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={handleSearch}>
          Search
        </Button>
      </Form>
      {/* Render search results based on fetched data */}
    </div>
  );
};

export default Search;
