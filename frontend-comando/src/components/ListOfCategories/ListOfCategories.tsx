import { Category } from "../Category/Category";
import { Item, List } from "./styles";

const ListOfCategories = () => {
  return (
    <List>
      {[1, 2, 3, 4].map((item: number) => (
        <Item key={item}>
          <Category />
        </Item>
      ))}
    </List>
  );
};

export { ListOfCategories };
