
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function FindProfile({ empId, onImageData }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const fetchImageForEmpId = async () => {
      try {
        setLoading(true);
        setError('');

        // Step 1: Fetch file name by empId
        const fileNameResponse = await axios.get(
          `http://localhost:8080/api/profile/empId/${empId}`,
          config
        );

        const fileUrl = fileNameResponse.data;

        // Skip if fileName is not found or is empty
        if (!fileUrl) {
        
          onImageData(null); // Inform parent no image found
          return;
        }
       
        onImageData(fileUrl); // Send image data directly to parent callback
      } catch (err) {
        
        console.error('Error fetching image:', err);
        onImageData(null); // Notify parent of failure
      } finally {
        setLoading(false);
      }
    };

    if (empId) {
      fetchImageForEmpId();
    }
  }, [empId]);

  return (
    <div>
      {loading && <p>Loading image...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default FindProfile;

