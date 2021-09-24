// import { Helmet } from "react-helmet";
import { Layout } from "../components/Layout/Layout";
import { FavsWithQuery } from "../containers/GetFavorities";

export const Favs = () => {
  return (
      <Layout title="tus favs" subtitle=''>
        <FavsWithQuery />
      </Layout>
      // <Helmet>
      //   <title>Petgram - tus favs</title>
      // </Helmet>
      // <h1>FAVS</h1>
  );
};
