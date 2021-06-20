import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLogin: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /**
   * useEffect dengan dependencies kosong artinya
   * hanya akan dijalankan sekali saja saat component peratama kali dirender
   */
  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLogin", 1);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogin: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
