import React, { Component } from "react";
import { browserHistory } from 'react-router';
import NavBar from './navbar';

export default class Home extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (
      <div>
      <NavBar />       
      <div id="home">
        This is the home page.
      </div>
      </div>
    );
  }
}