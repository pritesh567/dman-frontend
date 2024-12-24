import React, { useState } from 'react';
import axios from 'axios';
import { mobileRegex } from '../../Helpers/commonFunctions';

const Contact = () => {
  const [query, setQuery] = useState('');
    const [mobile, setMobile] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mobileRegex.test(mobile)) {
      alert('Please enter a valid mobile number (10 digits).');
      return;
    }
  };

  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
      <input
          type="phone"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="form-control mb-3"
          required
         maxLength={10}
        />
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
