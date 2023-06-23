 import { GET_USERS } from "./actions";
 import { GET_GENRES } from "./actions";
 import{GET_USERSID} from "./actions";

const initialState = {
    videogames: [],
    genres:[],
    game: [],
    copiaVideogames: [],
}


const rootReducer=(state= initialState,action)=>{
    switch(action.type){
        case GET_USERS:
            return {...state, videogames: action.payload};
            case GET_GENRES:
                return {...state,genres: action.payload};
                case GET_USERSID:
                    return{...state,game: action.payload};
        default:
            return{...state};
    }
}

export default rootReducer;