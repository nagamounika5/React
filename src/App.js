import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import Data from './data/data.json'

function App(){
  return(
    <BrowserRouter>
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  )
}

let Home=()=>{
  var info=Data.profiles;
  return(
    <section className="parent">
      {info.map((i,index)=>(
        <div className="card" key={index}>
          <h2> {i.basicInformation.name} </h2>
      <h4> {i.basicInformation.role} </h4>
        </div>
      ))}
    </section>
  )
}

export default App;
