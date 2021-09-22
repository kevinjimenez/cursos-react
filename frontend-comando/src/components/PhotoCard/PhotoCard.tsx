import React from "react";
import { Article, Button, Img, ImgWrapper } from "./styles";
import { MdFavoriteBorder } from "react-icons/md";
const PhotoCard = ({
  id = 1,
  likes = 0,
  src = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png",
}: {
  id?: number;
  likes?: number;
  src?: string;
}) => {
  const [show, setShow] = React.useState(false);
  const elemento = React.useRef(null);

  React.useEffect(() => {
    //
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      console.log({isIntersecting});
      
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });
    //@ts-ignore
    observer.observe(elemento.current);
  }, [elemento]);

  return (
    <Article ref={elemento}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt="" />
            </ImgWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size="32px" /> {likes} likes!
          </Button>
        </>
      )}
    </Article>
  );
};

export { PhotoCard };
