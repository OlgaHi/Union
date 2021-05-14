import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/layout/Home';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Alert from './components/layout/Alert';

const App = () =>
<Provider store={store}>
  <Router>
    <Fragment>
      <Navbar/>
      <Route exact path='/' component={Home} />
      <section className="container">
        <Alert />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
      </Switch>
      </section>
    </Fragment>
  </Router>
</Provider>

export default App;
