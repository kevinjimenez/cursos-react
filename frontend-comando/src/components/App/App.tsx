import { ListOfPhotoCards } from "../../containers/ListOfPhotoCard";
import { PhotoCardWithQuery } from "../../containers/PhotoCardWithQuery";
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
        // @ts-ignore 
        <PhotoCardWithQuery id={detailId}/>
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
