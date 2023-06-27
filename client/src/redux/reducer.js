import { GET_USERS } from "./actions";
import { GET_GENRES } from "./actions";
import { GET_USERSID } from "./actions";
import { GET_SEARCH } from "./actions";
import { RESET } from "./actions";
import { FILTER_BY_GENRE } from "./actions";
import { ORDER_ASC_RATING } from "./actions";
import { ORDER_DESC_RATING } from "./actions";
import { ORDER_BY_CREATOR } from "./actions";


const initialState = {
    videogames: [],
    genres: [],
    game: [],
    copiaVideogames: [],
    filteredVideogames: [],
    orderBy: "Select",
    filterBy: "All",
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, videogames: action.payload, copiaVideogames: action.payload };
        case GET_GENRES:
            return { ...state, genres: action.payload };
        case GET_USERSID:
            return { ...state, game: action.payload };
        case GET_SEARCH:
            return { ...state, videogames: action.payload };
        case RESET:
            return {
                ...state,
                videogames: [],
                filteredVideogames: [],
                orderBy: "Select",
                filterBy: "All",
            }
            case FILTER_BY_GENRE:
                return {
                  ...state,
                  filteredVideogames: action.payload.videogameGenre,
                  filterBy: action.payload.genre,
                };
              case ORDER_ASC_RATING:
              case ORDER_DESC_RATING:
                return {
                  ...state,
                  filteredVideogames: action.payload.videogamesOrder,
                  orderBy: action.payload.name,
                };
          
              case ORDER_BY_CREATOR:
              return {
                ...state,
                filteredVideogames: action.payload.videogames,
                filterBy: action.payload.source,
              };
        default:
            return { ...state };
    }
}

export default rootReducer;