import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/layout/Home';
import Navbar from './components/layout/Navbar';
import './App.css';

const App = () =>
  <Fragment>
    <Router>
    <Navbar/>
    <Home/>
    </Router>
    
  </Fragment>

export default App;
