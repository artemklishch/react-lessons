import React from 'react';
import moment from 'moment';

const fullYears = date => moment(date, "YYYYMMDD").fromNow().substr(0,2);

const Greeting = props => {
  console.log(props);
  return (
  <div className="greeting">
    {`My name is ${props.firstName} ${props.lastName}. I'm ${fullYears(props.birthDate)} years old.`}
  </div>
  );
};
export default Greeting;