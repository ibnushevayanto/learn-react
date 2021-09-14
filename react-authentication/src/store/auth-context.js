import { createContext, useState, useEffect, useCallback } from "react";

let logoutTimer;

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();
  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

const retrieveLocalStorage = () => {
  const token = localStorage.getItem("token");
  const batasAkhir = localStorage.getItem("time");
  const sisaWaktu = calculateRemainingTime(batasAkhir);

  if (sisaWaktu <= 60000) {
    return null;
  }

  return {
    token,
    sisaWaktu,
  };
};

export const AuthContextProvider = (props) => {
  const itemsInLocalStorage = retrieveLocalStorage();
  let initialToken = null;
  let sisaWaktu = null;

  if (itemsInLocalStorage) {
    initialToken = itemsInLocalStorage;
    sisaWaktu = itemsInLocalStorage.sisaWaktu;
  }

  const [Token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!Token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("time");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    const time = calculateRemainingTime(expirationTime);
    localStorage.setItem("token", token);
    localStorage.setItem("time", expirationTime);
    logoutTimer = setTimeout(logoutHandler, time);
  };

  useEffect(() => {
    if (sisaWaktu) {
      logoutTimer = setTimeout(logoutHandler, sisaWaktu);
    } else {
      logoutHandler();
    }
  }, [sisaWaktu, logoutHandler]);

  const contextValue = {
    token: Token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
