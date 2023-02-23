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
    <> {/** Could also use <React.Fragment> we do this instead of wrapping our code in a div so that we eliminate a bunch of divs from our DOM*/}
      <AddUser onAddUser={addUserHandler}></AddUser> {/** React fragment tags will not show up in the DOM, only what is inside, keeping things from getting cluttered */}
      <UserList users={usersList}></UserList>
    </>
  );
}

export default App;
