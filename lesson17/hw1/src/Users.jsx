import React, { useState } from 'react'
import User from './User'
import { Route, Link } from 'react-router-dom'

const Users = () => {
  const [userData, setUserData] = useState({});
  const onGetUserData = userName => {
    fetch(`https://api.github.com/users/${userName}`)
      .then(response => {
        if (!response.ok) throw new Error('Failed to load data')
        return response.json();
      })
      .then(user => {
        const { name, avatar_url, location } = user;
        setUserData({ name, avatar_url, location, });
      })
  }
  return (
    <div className="page__content">
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link onClick={() => onGetUserData('github')} to="/users/github">Github</Link>
        </li>
        <li className="navigation__item">
          <Link onClick={() => onGetUserData('facebook')} to="/users/facebook">Facebook</Link>
        </li>
      </ul>
      <Route exact path="/users">
        <span>Select a user please</span>
      </Route>
      <Route path="/users/:userId">
        <User userData={userData} />
      </Route>
    </div>
  )
}

export default Users
