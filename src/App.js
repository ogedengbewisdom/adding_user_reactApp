import React from 'react';
import NewUser from './components/NewUser/NewUser';
import UserBackground from './components/Users/UserBackground';

function App() {

  const users = [
    {id:"e23", name: "Max", age: 31},
    {id:"t73", name: "Wisdom", age: 28},
    {id:"z56", name: "Mercy", age: 13},
    {id:"y98", name: "Grace", age: 4}
  ]
  return (
    <div>
      <NewUser />
      <UserBackground
       item={users}
      />
    </div>
  );
}

export default App;
