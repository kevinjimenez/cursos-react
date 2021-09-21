import { Button, Img, ImgWrapper } from "./styles"
import { MdFavoriteBorder } from "react-icons/md";
const PhotoCard = ({id = 1, likes = 0, src = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'}: {id?: number, likes?: number, src?: string})=>{
    return (
        <article>
            <a href={`/detail/${id}`}>
                <ImgWrapper>
                    <Img src={src} alt="" />
                </ImgWrapper>
            </a>
            <Button>
                <MdFavoriteBorder size='32px'/> {likes} likes!
            </Button>
        </article>
    )
}

export {PhotoCard}