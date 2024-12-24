import React, { useState } from 'react';
import { mobileRegex } from '../../Helpers/commonFunctions';
import './BookAppointment.css'; // Import the CSS file

const BookAppointment = () => {
  const [date, setDate] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mobileRegex.test(mobile)) {
      alert('Please enter a valid mobile number (10 digits).');
      return;
    }

    // Handle form submission (e.g., send data to server)
    alert(`Appointment booked for ${date}`);
  };

  return (
    <div className="container mt-5">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        {/* Mobile Number Field */}
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="text"
            id="mobileNumber"
            placeholder="+91"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="form-control"
            required
            maxLength={10}
          />
        </div>

        {/* Event Date Field */}
        <div className="form-group">
          <label htmlFor="eventDate">Event Date</label>
          <input
            type="date"
            id="eventDate"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;
