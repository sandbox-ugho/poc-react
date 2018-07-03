import React, { Component } from 'react';

export default class Post extends Component {

  render() {
    const {post} = this.props;

    return (
      <div className="card">
        <div className="card-header text-center">
          Post
        </div>
        <div className="card-body">
          <h4 className="card-title text-truncate">{post.title}</h4>
          <p className="card-text text-truncate">{post.body}</p>
          <button className="btn btn-link">Card link</button>
          <button className="btn btn-link">Another link</button>
        </div>
        <div className="card-footer text-muted">
          2 days ago
        </div>
      </div>
    );
  }
}
