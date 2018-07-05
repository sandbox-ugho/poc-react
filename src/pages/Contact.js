import React, { Component } from 'react';
import Typing from '../components/Typing';

export default class Contact extends Component {
  render() {
    const text = "Je suis une super page de contact !!! :)";
    return (
      <Typing text={text}/>
    );
  }
}
