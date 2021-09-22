import axios from 'axios';
import React from 'react'

export const useCategoriesData = ()=>{
    const [categories, setCategories] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(false)
        // const fetchMyAPI = async () => {
        //   const response = await axios.get(
        //     "https://petgram-server-edsf8xpy2.now.sh/categories"
        //   );
        //   console.log("respuesta por de la API");
        //   console.log(response.data);
        //   setCategories(response.data)
        // };
    
        // fetchMyAPI();
        axios
          .get("https://petgram-server-edsf8xpy2.now.sh/categories")
          .then((response) => {
            setCategories(response.data);
            setLoading(true)
          });
      }, []);

    return {categories, loading}
}