import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';

// simple functional component returns app skeleton
const App = () => {
  const usersData = [
    { id:1, name:'Nick', username:'ebb_n_flow' },
    { id:2, name:'Shane O.', username:'tootired' },
    { id:3, name:'Benjamin', username:'rootsrevival' },
  ]

  const [users, setUsers] = useState(usersData)


// https://www.taniarascia.com/crud-app-in-react-with-hooks/
  // Since we’re not using a real API and database, which would 
  // probably have an auto-incrementing ID, I’m going to 
  // increment the ID of the new user manually. This function will 
  // take a user object as a parameter, and add them to the users array
  // of objects. The ...users code ensures that all the previous users
  //  remain in the array.


// Passed through 
  const addUser = (user) => {
    user.id = user.length + 1
    setUsers([ ...users, user ])
  } 

  // pass deleteUser through props to UserTable
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }


  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App;