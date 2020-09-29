import React, { Component } from "react";

export class Post extends Component {
  render() {
    const postId = this.props.match.params.id;
    return <div>{`Post: ${postId}`}</div>;
  }
}

export default Post;
