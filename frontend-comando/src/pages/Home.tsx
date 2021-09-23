import { ListOfCategories } from "../components/ListOfCategories/ListOfCategories"
import { ListOfPhotoCards } from "../containers/ListOfPhotoCard"

export const Home = ({id}: any)=>{
    return (
        <>
          <ListOfCategories />
          {/* @ts-ignore */}
          <ListOfPhotoCards categoryId={id} />
        </>
      )
}