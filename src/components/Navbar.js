import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';

export default class Navbar extends Component {

  constructor() {
    super();
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapsed = () => {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  };

  render() {
    const { collapsed } = this.state;
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">PocReact</Link>
        <button onClick={this.toggleCollapsed} className="navbar-toggler" type="button"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className={"navbar-collapse " + navClass}>
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
