import { Grid, Image, Link } from "./styles";

export const ListOfFavs = ({ favs = [] }: any) => {
  return (
    <Grid>
      {favs.map((fav: any) => (
        <Link key={fav.id} to={`/detail/${fav.id}`}>
          <Image key={fav.id} src={fav.src} />
        </Link>
      ))}
    </Grid>
  );
};
