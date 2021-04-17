import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import User from "./containers/User";
import Welcome from "./containers/Welcome";

const Posts = React.lazy(() => import("./containers/Posts"));

/**
 * React Suspens Dan React Lazy Sangat Bagus Jika Kita Ingin Menggunakan
 * Dynamic Component Yang Dimana Komponen Itu Muncul / Tidak
 * 
 * Jika ingin menggunakan Suspense / Lazy
 * Gunakan kepada component yang memiliki source besar
 * Jika tidak mungkin akan membuat aplikasi menjadi lebih lambat
 */

class App extends Component {
  state = {
    show: false,
  };

  togleShow() {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.togleShow.bind(this)}>Change</button>
        {this.state.show ? (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Posts />
          </React.Suspense>
        ) : (
          <User />
        )}
      </React.Fragment>
      // <BrowserRouter>
      //   <React.Fragment>
      //     <nav>
      //       <NavLink to="/user">User Page</NavLink> |&nbsp;
      //       <NavLink to="/posts">Posts Page</NavLink>
      //     </nav>
      //     <Route path="/" component={Welcome} exact />
      //     <Route path="/user" component={User} />
      //     <Route
      //       path="/posts"
      //       render={() => (
      //         <React.Suspense fallback={<div>Loading...</div>}>
      //           <Posts />
      //         </React.Suspense>
      //       )}
      //     />
      //   </React.Fragment>
      // </BrowserRouter>
    );
  }
}

export default App;
