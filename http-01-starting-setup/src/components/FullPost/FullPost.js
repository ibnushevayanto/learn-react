import React, { Component } from "react";
import axios from "axios";
import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null,
  };
  componentDidUpdate() {
    if (this.props.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
      ) {
        axios.get(`posts/${this.props.id}`).then((res) => {
          this.setState({ loadedPost: res.data });
        });
      }
    }
  }
  deletePostHandler = () => {
    axios.delete(`posts/${this.props.id}`).then((res) => {
      console.log(res);
    });
  };
  render() {
    let post;
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button onClick={this.deletePostHandler} className="Delete">
              Delete
            </button>
          </div>
        </div>
      );
    } else if (this.props.id) {
      post = <p className="text-center">Loading..</p>;
    } else {
      post = <p className="text-center">Please select a Post!</p>;
    }

    return post;
  }
}

export default FullPost;
