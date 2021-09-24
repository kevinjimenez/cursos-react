import React, { createContext } from "react";

export const Context = createContext({});

const Provider = ({ children }: any) => {
  const [isAuth, setisAuth] = React.useState(()=>{
    return sessionStorage.getItem('token')
  });

  const value = {
    isAuth,
    activateIsAuth: (token: string) => {
      //@ts-ignore
      setisAuth(true);
      sessionStorage.setItem('token', token)
    },
  };

  return (
    <Context.Provider value={value}>{children}</Context.Provider>
  );
};

export default {Provider, Consumer: Context.Consumer};
