import React, { Component } from 'react';
import Post from '../components/Post';
import axios from 'axios';

export default class Posts extends Component {

  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      this.setState({posts: res.data});
    }).catch(console.error);
  }

  render() {
    const posts = this.state.posts.map((post, i) =>
      <div className="col-lg-4 col-md-6 mb-3" key={i} >
        <Post post={post}/>
      </div>);

    return (
      <div>
        <h1>Posts</h1>
        <div className="row">{posts}</div>
      </div>
    );
  }
}
