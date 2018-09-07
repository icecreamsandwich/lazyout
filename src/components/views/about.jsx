import React, { Component } from "react";
import { browserHistory } from 'react-router';
import NavBar from './navbar';

export default class About extends Component {
  render() {
    return (
       <div>
      <NavBar />       
      <div id="about">
        This is the About page.
      </div>
      </div>
    );
  }
}