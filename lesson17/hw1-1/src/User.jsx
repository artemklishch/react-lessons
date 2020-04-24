import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const User = () => {
  const [userData, setUserData] = useState(null);
  const { userName } = useParams();
  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`)
      .then(response => {
        if (!response.ok) throw new Error('Failed to load data')
        return response.json();
      })
      .then(data => setUserData(data))
  }, [userName]);
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
  )
}

export default User
