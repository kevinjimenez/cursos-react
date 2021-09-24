import { Layout } from "../components/Layout/Layout";
import { PhotoCardWithQuery } from "../containers/PhotoCardWithQuery";

export const Detail = ({ detailId }: any) => {
  return (
    <Layout title={`Fotografia ${detailId}`}>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  );
};
