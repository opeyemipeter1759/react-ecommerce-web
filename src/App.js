import React from 'react'
import {Route, Switch} from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component.jsx'
import './App.css';

const HatsPage =()=>(
  <div className="">
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div >
    {/* <HomePage/> */}
    <Switch>
       <Route exact path = '/' component ={HomePage}/>
       <Route exact path = '/hats' component ={HatsPage}/>
    </Switch>
    </div>
  );
}

export default App;
