import React from "react";
import { Category } from "../Category/Category";
import { Item, List } from "./styles";
import axios from "axios";

const ListOfCategories = () => {
  const [categories, setCategories] = React.useState([]);
  const [showFixed, setShowFixed] = React.useState(false);
  React.useEffect(() => {
    // const fetchMyAPI = async () => {
    //   const response = await axios.get(
    //     "https://petgram-server-edsf8xpy2.now.sh/categories"
    //   );
    //   console.log("respuesta por de la API");
    //   console.log(response.data);
    //   setCategories(response.data)
    // };

    // fetchMyAPI();
    axios
      .get("https://petgram-server-edsf8xpy2.now.sh/categories")
      .then((response) => {
        setCategories(response.data);
      });
  }, []);

  // hooks para render el categories
  React.useEffect(() => {
    const onScroll = (e: any) => {
      let newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [showFixed]);

  const renderList = (fixed?: boolean) => {
    return (
      <List className={fixed ? "fixed" : ""}>
        {categories.map((item: any) => (
          <Item key={item.id}>
            <Category {...item} />
          </Item>
        ))}
      </List>
    );
  };
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};

export { ListOfCategories };
