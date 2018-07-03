import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NotFound from './NotFound';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="container mt-3">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}
