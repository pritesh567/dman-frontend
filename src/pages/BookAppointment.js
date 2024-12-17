import React, { useState } from 'react';
import axios from 'axios';

const BookAppointment = () => {
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/users/book', { date })
      .then(() => alert('Booking request submitted!'))
      .catch(err => console.error(err));
  };

  return (
    <div className="container mt-5">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          className="form-control mb-3"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default BookAppointment;
