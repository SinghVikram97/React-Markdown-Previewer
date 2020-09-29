import React, { Component } from "react";
import db from "../firebase";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
class Home extends Component {
  state = {
    posts: [],
    title: "",
  };
  componentDidMount() {
    // Fetch all posts
    db.ref("/posts").on("value", (snapshot) => {
      let posts = [];
      snapshot.forEach((childSnapshot) => {
        posts.push({ ...childSnapshot.val(), id: childSnapshot.key });
      });
      this.setState({ posts });
    });
  }
  render() {
    console.log(this.state.posts);
    return <>Home</>;
  }
}

export default Home;
