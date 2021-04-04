import React from "react";
import Post from "../../../components/Post/Post";
import FullPost from "../FullPost/FullPost";
import axios from "../../../axios";
import { Route } from "react-router-dom";

class Posts extends React.Component {
  state = {
    posts: [],
    error: false,
    activePosts: null,
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "Max",
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  postSelectedHandler = (id) => {
    this.setState({ activePosts: id });
    this.props.history.push({
      pathname: this.props.match.url + `/${id}`,
    });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          // <Link key={post.id} to={"/" + post.id}>
          <Post
            title={post.title}
            key={post.id}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
          // </Link>
        );
      });
    }

    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route component={FullPost} path={this.props.match.url + "/:id"} />
      </div>
    );
  }
}

export default Posts;
