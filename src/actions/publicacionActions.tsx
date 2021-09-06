import axios from "axios";
import {CARGANDO, ERROR, TRAER_POR_USUARIO} from "../Types/publicacionTypes";
import * as personajesTypes from '../Types/personajeTypes';
import {TRAER_TODOS} from "../Types/personajeTypes";

// const {TRAER_TODOS: USUARIOS_TRAER_TODOS} = personajesTypes;

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
        const {personajes} = getState().personajeReducer;
        const {publicaciones} = getState().publicacionReducer;
        if (personajes[key]?.id) {
            console.log('exite')
            const personaje_id = personajes[key].id;
            console.log(personaje_id)
            try {
                const respuesta = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts?userId=${personaje_id}`
                );
                console.log('respuewta de pu')
                console.log(respuesta)
                const publicacionesActualizadas = [
                    ...publicaciones,
                    respuesta.data
                ]
                const publicacionesKey = publicacionesActualizadas.length - 1;
                console.log(publicacionesKey)
                const personajesActualizados = [...personajes];
                personajesActualizados[key] = {
                    ...personajes[key],
                    publicacionesKey: publicacionesKey
                }

                console.log(personajesActualizados)

                dispatch({
                    type: TRAER_TODOS,
                    payload: personajesActualizados
                });


                dispatch({
                    type: TRAER_POR_USUARIO,
                    payload: publicacionesActualizadas,
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
        } else {
            console.log('no entre')
        }
    };
