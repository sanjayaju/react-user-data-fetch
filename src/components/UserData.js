import React, { useState } from 'react';
import './UserData.css'; 

const UserData = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUserData = () => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <div className="card">
        <h3>User Data</h3>
        <button className="fetch-button" onClick={fetchUserData}>
          Fetch User
        </button>
        {loading && <div>Loading...</div>}
        {user && (
          <div className="user-info">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserData;
