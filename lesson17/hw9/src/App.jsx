import React from 'react';
import ComponentC from './ComponentC';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const App = () => {
  return (
    <div>
      <UserContext.Provider value={'Artem'}>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
};
export default App;