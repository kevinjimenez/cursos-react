import { ListOfPhotoCards } from "../../containers/ListOfPhotoCard";
import { GlobalStyle } from "../../styles/GlobalStyles";
import { ListOfCategories } from "../ListOfCategories/ListOfCategories";
import { Logo } from "../Logo/Logo";

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");
  console.log(detailId);

  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <h1>Detail id</h1>
      ) : (
        <>
          <ListOfCategories />
          {/* @ts-ignore */}
          <ListOfPhotoCards categoryId={1} />
        </>
      )}
    </>
  );
};

export default App;
