import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const User = () => {
  const { userName } = useParams();
  const [userData, setUserData] = useState({});
  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`)
      .then(response => {
        if (!response.ok) throw new Error('Failed to load data')
        return response.json();
      })
      .then(user => {
        const { name, avatar_url, location } = user;
        setUserData({ name, avatar_url, location, });
      })
  }, [userName]);
  return (
    <div className="user">
      <img alt="User Avatar" src={userData.avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{userData.name}</span>
        <span className="user__location">{userData.location}</span>
      </div>
    </div>
  )
}

export default User
