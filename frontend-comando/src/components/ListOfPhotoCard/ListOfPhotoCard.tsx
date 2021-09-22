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

const ListOfPhotoCardComponent = ({ data: { photos = [] } } = {data: {photos: []}})=>{

    return (
        <ul>
        {
            photos.map((photo: any)=><PhotoCard key={photo.id} {...photo}/>)
        }
        </ul>
    )
}

//@ts-ignore
export const ListOfPhotoCard = withPhotos(ListOfPhotoCardComponent)