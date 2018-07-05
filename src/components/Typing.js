import React, { Component } from 'react';

export default class Typing extends Component {

  constructor() {
    super();
    this.interval = null;
    this.cursor = 0;

    this.state = {
      text: '',
    };
  }

  componentWillMount() {
    const delay = this.props.delay ? this.props.delay : 80;

    if (this.props.text) {
      this.interval = setInterval(() => this.updateText(), delay);
    }
  }

  componentWillUnmount() {
    this.removeInterval();
  }

  removeInterval() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  updateText() {
    const {text} = this.props;
    const textLength = text.length;

    if (this.cursor === textLength) {
      this.removeInterval();
      // TODO: send finished event
    }

    this.setState((prevState) => ({
      text: prevState.text + text.charAt(this.cursor)
    }));

    this.cursor += 1;
  }

  render() {
    const {text} = this.state;

    return (
      <div className="typewriter">
        <p>{text}</p>
      </div>
    );
  }
}
