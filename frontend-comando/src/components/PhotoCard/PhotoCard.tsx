import React from "react";
import { Article, Button, Img, ImgWrapper } from "./styles";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
const PhotoCard = ({
  id = 1,
  likes = 0,
  src = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png",
}: {
  id?: number;
  likes?: number;
  src?: string;
}) => {
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const [show, elemento] = useNearScreen()
  //   const [show, setShow] = React.useState(false);
  //   const [liked, setLiked] = React.useState(() => {
  //     try {
  //       const like = localStorage.getItem(key);
  //       return like;
  //     } catch (error) {
  //       console.error(error);
  //       return false;
  //     }
  //   });
  //   console.log("liked", liked);

  //   const elemento = React.useRef(null);

  //   React.useEffect(() => {
  //     Promise.resolve(
  //       typeof window.IntersectionObserver !== "undefined"
  //         ? window.IntersectionObserver
  //         : //@ts-ignore
  //           import("intersection-observer")
  //     ).then(() => {
  //       const observer = new window.IntersectionObserver(function (entries) {
  //         const { isIntersecting } = entries[0];
  //         if (isIntersecting) {
  //           setShow(true);
  //           observer.disconnect();
  //         }
  //       });
  //       //@ts-ignore
  //       observer.observe(elemento.current);
  //     });
  //     // sin un fecth de api
  //   }, [elemento]);

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  //   const setLocalStorage = (value: any) => {
  //     try {
  //       localStorage.setItem(key, value);
  //       setLiked(value);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  return (
    <Article ref={elemento}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt="" />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size="32px" /> {likes} likes!
          </Button>
        </>
      )}
    </Article>
  );
};

export { PhotoCard };
