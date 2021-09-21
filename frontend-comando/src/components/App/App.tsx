import { GlobalStyle } from '../../GlobalStyles';
import { ListOfPhotoCard } from '../../ListOfPhotoCard/ListOfPhotoCard';
import {ListOfCategories} from '../ListOfCategories/ListOfCategories'

function App() {
  return (
    <>
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCard />
    </>
  );
}

export default App;
