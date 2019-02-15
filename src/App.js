import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm'

const App = () => {
  const usersData = [
    { id:1, name:'Nick', username:'ebb_n_flow' },
    { id:2, name:'Shane O.', username:'too-tired' },
    { id:3, name:'Shawna', username:'rootsrevival' },
    { id:4, name:'Sheena, W.P.', username:'sheenaWp312' }
  ]

// Hooks syntax - you define the two params in [x, y]. 
// useState comes from React import for handling state

  const [users, setUsers] = useState(usersData)


// increment the ID of the new user manually - function will 
// take a user object as a parameter,  add them to the users array of objects
// the ...users code ensures that all the previous users remain in the array

  const addUser = (user) => {
    user.id = user.length + 1
    setUsers([ ...users, user ])
  } 

  // pass deleteUser through props to UserTable
  // use setter to take ID of user & filter them out of the users array 
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  const [editing, setEditing] = useState(false)
  const initialFormState = {id:null, name:'', username:'' }
  const [ currentUser, setCurrentUser ] = useState(initialFormState)
  
  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({ id:user.id, name:user.name, username:user.username})
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map(user=> (user.id === id ? updatedUser : user))) 
  }


  return (
    <div className="container">
      <h1>CRUD React App with Hooks Instead of Classes</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App;