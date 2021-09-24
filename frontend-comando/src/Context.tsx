import React, { createContext } from "react";

const Context = createContext({});

const Provider = ({ children }: any) => {
  const [isAuth, setisAuth] = React.useState(false);

  const value = {
    isAuth,
    activateIsAuth: (token: string) => {
      setisAuth(true);
      sessionStorage.setItem('token', token)
    },
  };

  return (
    <Context.Provider value={value}>{children}</Context.Provider>
  );
};

export default {Provider, Consumer: Context.Consumer};
