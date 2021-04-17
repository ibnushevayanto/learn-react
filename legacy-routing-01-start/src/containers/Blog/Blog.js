import React from "react";
import Posts from "./Posts/Posts";
import "./Blog.css";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
/**
 * Lazy Loading Page With HOC
 */
import asyncComponent from "../../hoc/asyncComponent";
const AsyncComponent = asyncComponent(() => {
  return import("./NewPost/NewPost");
});

class Blog extends React.Component {
  state = {
    auth: true,
  };

  render() {
    const url = new URL(window.location.href);
    console.log(url);
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  exact
                  activeClassName="my-active"
                  activeStyle={{ textDecoration: "underline" }}
                  to="/posts"
                >
                  Post
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/**
         * Exact = Harus Spesifik Urlnya Seperti Path atau kalau tidak, component tidak akan terender
         * Example
         * <Route path="/" exact render={() => <h1>Home</h1>} />
         */}
        {/**
         * <Switch> = Hanya merender satu route saja
         */}
        <Switch>
          {/**
           ** NavigationGuard
           */}
          {this.state.auth ? (
            <Route path="/new-post" component={AsyncComponent} />
          ) : null}
          <Route path="/posts" component={Posts} />
          {/* <Redirect from="/" to="/posts" /> */}
          <Route render={() => <h1>Page Not Found!</h1>} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
