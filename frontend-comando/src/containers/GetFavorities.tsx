import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { ListOfFavs } from "../components/ListOfFavs/ListOfFavs";

const GET_FAVORITES = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

const renderProp = ({ loading, error, data }: any) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  const { favs } = data;
  console.log(data);

  return <ListOfFavs favs={favs} />;
};

export const FavsWithQuery = () => (
  <Query query={GET_FAVORITES} fetchPolicy='cache-and-network' >{renderProp}</Query>
);
