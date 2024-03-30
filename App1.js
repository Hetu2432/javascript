import './App1.css';
import React from 'react';


function App1() {
  const item =[
    {"name":"Use Array.map",id:1},
    {"name":"Not a for loop",id:2},
    {"name":"Give each item a unique key",id:3},
    {"name":"Avoid using array index as the key",id:4}]
  return (
    <div className="App1">
      <div className='container'>
      <h1>The "React Way" to Render a List</h1>
      <h2> 
        {item.map((items)=>{
       return(
           <li key={items.id}>{items.name}</li>
       )
      })}
    </h2>
    </div>
    </div>
  );
}

export default App1;