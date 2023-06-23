import axios from "axios";

export const GET_USERS = "GET_USERS";
export const GET_USERSID = "GET_USERSID"
export const GET_GENRES = "GET_GENRES"

export const getVideogames = () => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/videogames`);
        const videogames = apiData.data;
        dispatch({type:GET_USERS, payload:videogames})
    }
};

export function idGame(id){
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/videogames/${id}`)
        console.log("RESPONSE:",response);
        return dispatch({
            type:GET_USERSID ,
            payload: response.data
        })
    }
};

export const getGenres = () => {
    return async (dispatch) => {
  
            const response = await axios.get(`http://localhost:3001/genres`);
            const genres = response.data;
            return dispatch({ type: GET_GENRES, payload: genres });
      
        }
    };

export const postGame = (game) => {
    return async function (dispatch) {
        const apiData = await axios.post(`http://localhost:3001/videogames`,game);
        const games = apiData.data;
        dispatch({type: GET_GENRES, payload:games})
    }
};

