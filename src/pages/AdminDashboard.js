import React, { useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    axios.post('/api/admin/upload', formData)
      .then(() => alert('Media uploaded!'))
      .catch(err => console.error(err));
  };

  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>
      <form onSubmit={handleFileUpload}>
        <input
          type="file"
          className="form-control mb-3"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit" className="btn btn-primary">Upload</button>
      </form>
    </div>
  );
};

export default AdminDashboard;
