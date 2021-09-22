import { GlobalStyle } from '../../styles/GlobalStyles';
import { ListOfPhotoCard } from '../ListOfPhotoCard/ListOfPhotoCard';
import {ListOfCategories} from '../ListOfCategories/ListOfCategories'
import { Logo } from '../Logo/Logo';

function App() {
  return (
    <>
    <GlobalStyle />
    <Logo/>
    <ListOfCategories />
    {/* @ts-ignore */}
    <ListOfPhotoCard categoryId={1}/>
    </>
  );
}

export default App;
