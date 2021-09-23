// import { PhotoCardWithQuery } from "../../containers/PhotoCardWithQuery";
import { Home } from "../pages/Home";
import { GlobalStyle } from "../styles/GlobalStyles";
import { Logo } from "../components/Logo/Logo";
import { Router } from "@reach/router";
import { Detail } from "../pages/Detail";
import { NavBar } from "../components/NavBar/NavBar";
import { Favs } from "../pages/Favs";
import { User } from "../pages/User";
import { NotRegisteredUser } from "../pages/NotRegisteredUser";

// render prop
const UserLogged = ({ children }: any) => {
  return children({ isAuth: true });
};

export const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search);
  // const detailId = urlParams.get("detail");
  // console.log(detailId);

  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        {/* @ts-ignore  */}
        <Home path="/" />
        {/* @ts-ignore  */}
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
      </Router>
      <UserLogged>
        {({ isAuth }: any) =>
          isAuth ? (
            <Router>
              {/* @ts-ignore  */}
              <Favs path="/favs" />
              {/* @ts-ignore  */}
              <User path="/user" />
            </Router>
          ) : (
            <Router>
              {/* @ts-ignore  */}
              <NotRegisteredUser path="/favs" />
              {/* @ts-ignore  */}
              <NotRegisteredUser path="/user" />
            </Router>
          )
        }
      </UserLogged>

      <NavBar />
    </>
  );
};

export default App;
