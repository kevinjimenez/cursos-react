import { PhotoCard } from "../PhotoCard/PhotoCard"
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const withPhotos = graphql(gql`
query getPhotos {
  photos {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`)

const ListOfPhotoCardComponent = (props: any)=>{
    console.log(props);
    
    return (
        <ul>
        {
            [1,2,3,4,5,6,7,8].map((card: any)=><PhotoCard key={card} id={card}/>)
        }
        </ul>
    )
}

export const ListOfPhotoCard = withPhotos(ListOfPhotoCardComponent)