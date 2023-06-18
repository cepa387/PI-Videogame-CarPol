import axios from "axios";

export const GET_USERS = "GET_USERS";
export const GET_USERSID = "GET_USERSID"

export const getVideogames = () => {
    return async function (dispatch) {
        const apiData = await axios.get(
            `http://localhost:3001/videogames`            
        );
        const videogames = apiData.data;
        dispatch({type:GET_USERS, payload:videogames})
    }
};

export const getUsersid = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(
            `http://localhost:3001/videogame/${id}`            
        );
        const videogames = apiData.data;
        dispatch({type: GET_USERSID, payload:videogames})
    }
};