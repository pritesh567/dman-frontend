import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/users/query', { query })
      .then(() => alert('Query submitted!'))
      .catch(err => console.error(err));
  };

  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="form-control mb-3"
          placeholder="Enter your query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></textarea>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
