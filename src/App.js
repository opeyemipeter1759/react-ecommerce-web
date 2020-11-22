import React from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx'
import SignInSignUp from  './pages/signin-signupPage/signin-signup.component'
import Header from './components/header/header.component.jsx';

function App() {
  return (
    <div >
    {/* <HomePage/> */}
    <Header/>
    <Switch>
       <Route exact path = '/' component ={HomePage}/>
       <Route exact path = '/signin' component ={SignInSignUp}/>
    </Switch>
    </div>
  );
}

export default App;
