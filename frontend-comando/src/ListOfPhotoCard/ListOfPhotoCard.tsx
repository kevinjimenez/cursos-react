import { PhotoCard } from "../components/PhotoCard/PhotoCard"

const ListOfPhotoCard = ()=>{
    return (
        <ul>
        {
            [1,2,3,4].map((card: any)=><PhotoCard key={card}/>)
        }
        </ul>
    )
}

export {ListOfPhotoCard}