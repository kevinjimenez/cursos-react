import React from "react";
// import { PhotoCardWithQuery } from "../../containers/PhotoCardWithQuery";
import { Home } from "../pages/Home";
import { GlobalStyle } from "../styles/GlobalStyles";
import { Logo } from "../components/Logo/Logo";
import { Redirect, Router } from "@reach/router";
import { Detail } from "../pages/Detail";
import { NavBar } from "../components/NavBar/NavBar";
import { Favs } from "../pages/Favs";
import { User } from "../pages/User";
import { NotRegisteredUser } from "../pages/NotRegisteredUser";
import { Context } from "../Context";
import { NotFound } from "../pages/NotFound";

// render prop
// const UserLogged = ({ children }: any) => {
//   return children({ isAuth: true });
// };

export const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search);
  // const detailId = urlParams.get("detail");
  // console.log(detailId);

  //@ts-ignore
  const { isAuth } = React.useContext(Context);

  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        {/* @ts-ignore  */}
        <NotFound default/>
        {/* @ts-ignore  */}
        <Home path="/" />
        {/* @ts-ignore  */}
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
        {/* @ts-ignore  */}
        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect from="/favs" to="/login" />}
        {!isAuth && <Redirect from="/user" to="/login" />}
        {isAuth && <Redirect from="/login" to="/" />}
        {/* @ts-ignore  */}
        <Favs path="/favs" />
        {/* @ts-ignore  */}
        <User path="/user" />
      </Router>
      <NavBar />
    </>
  );
};

export default App;
