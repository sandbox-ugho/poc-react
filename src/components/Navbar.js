import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">PocReact</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" >
              <NavLink className="nav-link" exact to="/" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" activeClassName="active">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
