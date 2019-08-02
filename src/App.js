import React from 'react';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Singlepage from './pages/Singlepage';
import Navbar from './components/navbar'
import Error from './pages/Error';
import {Route, Switch, Link} from 'react-router-dom'





function App() {
  return (
    <div>
      < Navbar />
      <Switch>
      <Route exact path ='/' component = { Home } />
      <Route exact path ='/Rooms' component = { Rooms } />
      <Route exact  path ='/Rooms/:Room' component = { Singlepage } />
      <Route component = { Error  } />




      </Switch>
      
    </div>
    
  )
}

export default App;
