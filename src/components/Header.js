import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './Header.css';

export default class App extends Component {
  render() {
    return (
      <header>
        <img src={logo} className="Header-logo" alt="logo" />
        <h1 className="Header-title">Welcome to React</h1>
      </header>
    );
  }
}
