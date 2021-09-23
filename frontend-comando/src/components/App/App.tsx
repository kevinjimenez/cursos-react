// import { PhotoCardWithQuery } from "../../containers/PhotoCardWithQuery";
import { Home } from "../../pages/Home";
import { GlobalStyle } from "../../styles/GlobalStyles";
import { Logo } from "../Logo/Logo";
import { Router } from "@reach/router";
import { Detail } from "../../pages/Detail";

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
        <Detail path='/detail/:detailId'/>
      </Router>
    </>
  );
};

export default App;
