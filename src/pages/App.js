import React, { Component } from 'react';
import Header from '../components/Header';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <p className="alert alert-info">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
