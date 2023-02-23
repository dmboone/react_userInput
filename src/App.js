import React, {useState} from 'react';
import AddUser from './Components/User/AddUser';
import UserList from './Components/User/UserList';

function App() {
const [usersList, setUsersList] = useState([]);

const addUserHandler = (uName, uAge) => {
  setUsersList((prevUsersList) => {
    return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}];
  });
};

  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList users={usersList}></UserList>
    </div>
  );
}

export default App;
