import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();
  const [userData, setUserDate] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => {
        if (response.ok) return response.json();
        throw new Error('Failed to fetch');
      })
      .then(userData => setUserDate(userData));
  }, [userId]);
  if (!userData) return null;
  const { avatar_url, name, location } = userData;
  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};
export default User;