// import { Helmet } from "react-helmet";
import { Layout } from "../components/Layout/Layout";
import { FavsWithQuery } from "../containers/GetFavorities";

const Favs = () => {
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

export default Favs
