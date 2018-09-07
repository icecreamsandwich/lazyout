import React, { Component } from "react";
import NavBar from './navbar';

export default class Contact extends Component {
  render() {
    return (
       <div>
      <NavBar />       
      <div id="contact">
        This is the contact page.
      </div>
      </div>
    );
  }
}