import React from 'react';
import moment from 'moment';
import './profile.scss';

const onGetBirthDate = date => moment(date).format("DD MMM YY");

const Profile = props => {
  return (
    <>
    <h1 className="greeting__name">{`${props.userData.firstName} ${props.userData.lastName}`}</h1>
    <p className="greeting__birth">{`Was born ${onGetBirthDate(props.userData.birthDate)} in ${props.userData.birthPlace}`}</p>
    </>
  );
};
export default Profile;