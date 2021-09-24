import { Article, Img, ImgWrapper } from "./styles";
// import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton/FavButton";
import { ToggleLikeMutation } from "../../containers/ToggleLikeMutation";
import { Link } from "@reach/router";
const PhotoCard = ({
  id = 1,
  liked,
  likes = 0,
  src = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png",
}: {
  id?: number;
  liked: boolean;
  likes?: number;
  src?: string;
}) => {
  // const key = `like-${id}`;
  // const [liked, setLiked] = useLocalStorage(key, false);
  const [show, elemento] = useNearScreen();

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

  //   const setLocalStorage = (value: any) => {
  //     try {
  //       localStorage.setItem(key, value);
  //       setLiked(value);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  // const handleFavClick = () => setLiked(!liked);

  return (
    <Article ref={elemento}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt="" />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {
              (toggleLike: any) => {
                const handleFavClick = () => {
                  toggleLike({
                      variables: {
                        input: { id },
                      },
                    });

                  // setLiked(!liked);
                };

                return <FavButton
                  liked={liked}
                  likes={likes}
                  onClick={handleFavClick}
                />;
              }
            }
          </ToggleLikeMutation>

          {/* <Button onClick={() => setLiked(!liked)}>
            <Icon size="32px" /> {likes} likes!
          </Button> */}
        </>
      )}
    </Article>
  );
};

export { PhotoCard };
