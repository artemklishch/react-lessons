import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const User = ({userData}) => {
  const { userName } = useParams();
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
