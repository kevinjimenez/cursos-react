import { ListOfPhotoCards } from '../../containers/ListOfPhotoCard';
import { GlobalStyle } from '../../styles/GlobalStyles';
import {ListOfCategories} from '../ListOfCategories/ListOfCategories'
import { Logo } from '../Logo/Logo';

function App() {
  return (
    <>
    <GlobalStyle />
    <Logo/>
    <ListOfCategories />
    {/* @ts-ignore */}
    <ListOfPhotoCards categoryId={1}/>
    </>
  );
}

export default App;
