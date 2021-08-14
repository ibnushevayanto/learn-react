import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { Fragment } from "react";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLogin);
  return (
    <Fragment>
      <Header />
      {isLoggedIn ? (
        <Fragment>
          <UserProfile />
          <Counter />
        </Fragment>
      ) : (
        <Auth />
      )}
    </Fragment>
  );
}

export default App;
