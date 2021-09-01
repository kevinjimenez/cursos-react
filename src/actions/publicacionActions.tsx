import axios from "axios";
import { CARGANDO, ERROR, TRAER_POR_USUARIO } from "../Types/publicacionTypes";

// export const traerTodos = () => async (dispatch: any) => {
//     dispatch({
//         type: CARGANDO,
//     })
//     try {
//         const respuesta = await axios.get('https://jsonplaceholder.typicode.com/posts')
//         dispatch({
//             type: TRAER_TODOS,
//             payload: respuesta.data.results
//         })
//     } catch (error) {
//         // @ts-ignore
//         console.log('Error', error.message)
//         dispatch({
//             type: ERROR,
//             // @ts-ignore
//             payload: error.message
//         })
//     }
// }

export const traerPorUsuario =
  (key: any) => async (dispatch: any, getState: any) => {
    const { personajes } = getState().personajeReducer;
    console.log(getState().personajeReducer);
    
    console.log(personajes[key]);
    
    const personaje_id = 1
    // const personaje_id = personajes[key].id;
    console.log("jajaj");
    console.log(key);

    try {
      const respuesta = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${personaje_id}`
      );
      dispatch({
        type: TRAER_POR_USUARIO,
        payload: respuesta.data,
      });
    } catch (error) {
      // @ts-ignore
      console.log("Error", error.message);
      dispatch({
        type: ERROR,
        // @ts-ignore
        payload: error.message,
      });
    }
  };
