import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    axios.get('/api/admin/media')
      .then(response => setMedia(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-5">
      <h2>Gallery</h2>
      <div className="row">
        {media.map(item => (
          <div key={item._id} className="col-md-4">
            {item.type === 'photo' ? (
              <img src={item.url} alt="Gallery" className="img-fluid mb-3" />
            ) : (
              <video src={item.url} controls className="img-fluid mb-3" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
