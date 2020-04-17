import React, { useState, useCallback } from 'react';
import Count from './Count';
import Button from './Button';
import Title from './Title';

const ParentComponent = () => {
  const [age, setAge] = useState(25);
  const [salery, setSalery] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalery(salery + 1000);
  }, [salery]);
  return (
    <div>
      <Title />
      <Count text='Age' count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text='Salery' count={salery} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}
export default ParentComponent;