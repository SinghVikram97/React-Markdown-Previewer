import React, { Component } from "react";
import { Link } from "react-router-dom";
import db from "../firebase";
import ReactMarkdown from "react-markdown";
export class Post extends Component {
  constructor(props) {
    super(props);
    this.titleRef = React.createRef();
    this.bodyRef = React.createRef();
    this.postRef = db.ref(`posts/${this.props.match.params.id}`);
    this.state = {
      mdBdoy: "",
    };
  }
  componentDidMount() {
    this.postRef.on("value", (snapshot) => {
      if (snapshot.exists()) {
        this.titleRef.current.value = snapshot.val().title;
        this.bodyRef.current.value = snapshot.val().body;
        this.setState({
          mdBdoy: snapshot.val().body,
        });
      }
    });
  }
  onChange = () => {
    this.postRef
      .set({
        title: this.titleRef.current.value,
        body: this.bodyRef.current.value,
      })
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
        <div className="row">
          <div className="col col-sm-12 mt-5 mb-4">
            <Link to="/">
              <h4>Home</h4>
            </Link>
          </div>
          <div className="col col-sm-12">
            <input
              type="text"
              ref={this.titleRef}
              placeholder="Title"
              className="post-title"
              onChange={this.onChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col col-sm-6">
            <textarea
              className="form-control"
              placeholder="Post body"
              ref={this.bodyRef}
              type="text"
              onChange={this.onChange}
              row={30}
            ></textarea>
          </div>
          <div className="col col-sm-6">
            <ReactMarkdown source={this.state.mdBdoy} />
          </div>
        </div>
      </>
    );
  }
}

export default Post;
