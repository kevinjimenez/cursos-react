import {Helmet} from 'react-helmet'
import { Layout } from '../components/Layout/Layout'
import { ListOfCategories } from "../components/ListOfCategories/ListOfCategories"
import { ListOfPhotoCards } from "../containers/ListOfPhotoCard"

export const Home = ({id}: any)=>{
    return (
        <>
        <Layout title="fotos de pets" subtitle=''>
        <ListOfCategories />
          {/* @ts-ignore */}
          <ListOfPhotoCards categoryId={id} />
        </Layout>
        {/* <Helmet>
          <title>Petgram - fotos de pets</title>
        </Helmet> */}
        </>
      )
}