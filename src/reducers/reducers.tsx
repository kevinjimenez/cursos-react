import {combineReducers} from 'redux'
import personajeReducer from "./personajeReducer";
import publicacionReducer from "./publicacionReducer";

export default combineReducers({
    personajeReducer,
    publicacionReducer
});
