import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import NotFound from './NotFound';
import Posts from './Posts';

export default class Layout extends Component {
  render() {
    const containerStyle = {
      marginTop: '60px',
      marginBottom: '80px',
    };

    return (
      <Router>
        <div>
          <Navbar />
          <div className="container" style={containerStyle}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/posts" component={Posts} />
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
