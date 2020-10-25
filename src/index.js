import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './css/index.css';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home/home';
import Contact from './pages/contact/contact';

var hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={hist} >
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
