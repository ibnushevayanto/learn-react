import React, { useContext } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const authContext = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader
        isAuthenticated={authContext.isLogin}
        onLogout={authContext.onLogout}
      />
      <main>
        {!authContext.isLogin && <Login onLogin={authContext.onLogin} />}
        {authContext.isLogin && <Home onLogout={authContext.onLogout} />}
      </main>
    </React.Fragment>
  );
}

export default App;
