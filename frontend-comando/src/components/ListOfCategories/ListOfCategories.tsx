import { Category } from "../Category/Category";
import { Item, List } from "./styles";
import {categories} from '../../db.json'

const ListOfCategories = () => {
  return (
    <List>
      {categories.map((item: any) => (
        <Item key={item.id} >
          <Category {...item}/>
        </Item>
      ))}
    </List>
  );
};

export { ListOfCategories };
