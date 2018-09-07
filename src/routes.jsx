import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './components/views/home';
import LandingHome from './components/views/LandingHome';
import Contact from './components/views/contact';
import About from './components/views/about';
import NavBar from './components/views/navbar';
import Lorem from './components/views/lorem';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={LandingHome} />
    <Route path='contact' component={Contact} />
    <Route path='about' component={About} />
    <Route path='navbar' component={NavBar} />
    <Route path='lorem' component={Lorem} />
    <Route path='home' component={Home} />
    <Route path='*' component={LandingHome} />
  </Route>
);