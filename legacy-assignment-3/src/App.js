import React from "react";

import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <nav className="menu">
            <ul>
              <li>
                <NavLink to="/" activeClassName="active-link" exact>
                  User
                </NavLink>
              </li>
              <li>
                <NavLink to="/courses" activeClassName="active-link">
                  Courses
                </NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Redirect from="/all-courses" to="/courses" />
            <Route path="/" exact component={Users} />
            <Route path="/courses" component={Courses} />
            <Route render={() => <h1>Page Not Found</h1>} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
