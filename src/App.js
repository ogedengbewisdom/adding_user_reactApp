import React from 'react';
import UserBackground from './components/UserBackground';

function App() {

  const users = [
    {name: "Max", age: 31},
    {name: "Wisdom", age: 28},
    {name: "Mercy", age: 13},
    {name: "Grace", age: 4}
  ]
  return (
    <div>
      <UserBackground
       item={users}
      />
    </div>
  );
}

export default App;
