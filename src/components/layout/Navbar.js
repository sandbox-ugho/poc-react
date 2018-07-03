import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';

export default class Navbar extends Component {

  constructor() {
    super();
    this.state = {
      collapsed: true,
      logged: false,
    };
  }

  toggleCollapsed = () => {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  };

  toggleLogged= () => {
    const logged = !this.state.logged;
    this.setState({logged});
  };

  render() {
    const { collapsed } = this.state;
    const { logged } = this.state;

    const navClass = collapsed ? "collapse" : "";

    const logButton = logged ?
      <button className="btn btn-outline-danger" onClick={this.toggleLogged}>Logout</button>
      : <button className="btn btn-outline-success" onClick={this.toggleLogged}>Login</button>;

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to="/">PocReact</Link>
        <button onClick={this.toggleCollapsed} className="navbar-toggler" type="button"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className={"navbar-collapse " + navClass}>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item" >
              <NavLink className="nav-link" exact to="/" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/posts" activeClassName="active">Posts</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" activeClassName="active">Contact</NavLink>
            </li>
          </ul>
          {logButton}
        </div>
      </nav>
    );
  }
}
