import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/style/Header.css';

export default class App extends Component {
  render() {
    return (
      <header className="text-center">
        <img src={logo} className="Header-logo" alt="logo" />
        <h1>Welcome to React</h1>
      </header>
    );
  }
}
