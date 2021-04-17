import React, { Component } from "react";
import axios from "../../axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
    postId: null,
  };
  componentDidMount() {
    axios.get("posts").then((res) => {
      const transformedData = res.data
        .slice(0, 4)
        .map((res) => ({ ...res, author: "Ibnu Shevayanto" }));
      this.setState({ posts: transformedData });
    });
  }
  clickPostHandler(id) {
    this.setState({ postId: id });
  }
  render() {
    return (
      <div>
        <section className="Posts">
          {this.state.posts.map((res) => (
            <Post
              title={res.title}
              key={res.id}
              id={res.id}
              author={res.author}
              clickHandler={this.clickPostHandler.bind(this)}
            />
          ))}
        </section>
        <section>
          <FullPost id={this.state.postId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
