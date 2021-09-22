import { ListOfPhotoCardComponent } from "../components/ListOfPhotoCard/ListOfPhotoCard";
import { withPhotos } from "../hoc/withPhotos";

//@ts-ignore
export const ListOfPhotoCards = withPhotos(ListOfPhotoCardComponent)