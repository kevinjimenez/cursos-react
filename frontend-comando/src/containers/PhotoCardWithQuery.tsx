import { PhotoCard } from "../components/PhotoCard/PhotoCard";

import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const renderProp = ({ loading, error, data }: any) => {
    console.log(data);
    if(loading) return <p>Cargando...</p>
    if(loading) return <p>Error!</p>
    const { photo = {} } = data
    return <PhotoCard {...photo}/>;
  }

export const PhotoCardWithQuery = ({ id }: any) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {
        renderProp
    }
  </Query>
);
