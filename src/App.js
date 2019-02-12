import React, { useState } from 'react';
import UserTable from './tables/UserTable';
// import AddUserTable from './tables/AddUserTable';

// simple functional component returns app skeleton
const App = () => {
  const usersData = [
    { id:1, name:'Nick', username:'ebb_n_flow' },
    { id:2, name:'Shane O.', username:'tootired' },
    { id:3, name:'Benjamin', username:'rootsrevival' },
  ]

  const [users, setUsers] = useState(usersData)

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable users={users}/>
        </div>
      </div>
    </div>
  )
}

export default App;