import { GlobalStyle } from '../../styles/GlobalStyles';
import { ListOfPhotoCard } from '../../ListOfPhotoCard/ListOfPhotoCard';
import {ListOfCategories} from '../ListOfCategories/ListOfCategories'
import { Logo } from '../Logo/Logo';

function App() {
  return (
    <>
    <GlobalStyle />
    <Logo/>
    <ListOfCategories />
    <ListOfPhotoCard />
    </>
  );
}

export default App;
