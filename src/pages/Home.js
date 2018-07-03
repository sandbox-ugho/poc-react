import React, { Component } from 'react';
import '../assets/style/Home.css'
import logo from '../assets/images/logo.svg';

export default class Home extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={logo} className="Home-logo" alt="logo" />
        <h1>Welcome to React</h1>
      </div>
    );
  }
}
