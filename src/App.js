import React, { useState } from 'react';
import NewUser from './components/NewUser/NewUser';
import UserBackground from './components/Users/UserBackground';


const DUMMY_USERS = [
  {id:"e23", name: "Max", age: 31},
  {id:"t73", name: "Wisdom", age: 28},
]


function App() {

  const [newProfile, setNewProfile] = useState(DUMMY_USERS)

  const userProfile = (newOnes) => {
      setNewProfile(prevUsers => {
        return [newOnes, ...prevUsers]
      })
  }
  return (
    <div>
      <NewUser users={userProfile} />
      <UserBackground
       item={newProfile}
      />
    </div>
  );
}

export default App;
