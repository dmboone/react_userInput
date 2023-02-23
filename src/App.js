import React from 'react';
import AddUser from './Components/User/AddUser';
import UserList from './Components/User/UserList';

function App() {
  return (
    <div>
      <AddUser></AddUser>
      <UserList users={[]}></UserList>
    </div>
  );
}

export default App;
