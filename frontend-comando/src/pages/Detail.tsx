import { PhotoCardWithQuery } from "../containers/PhotoCardWithQuery"

export const Detail = ({detailId}: any) => {
    return(
        // @ts-ignore
        <PhotoCardWithQuery id={detailId} />
    )
}