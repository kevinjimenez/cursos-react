import { PhotoCard } from "../PhotoCard/PhotoCard"


export const ListOfPhotoCardComponent = ({ data: { photos = [] } } = {data: {photos: []}})=>{

    return (
        <ul>
        {
            photos.map((photo: any)=><PhotoCard key={photo.id} {...photo}/>)
        }
        </ul>
    )
}

