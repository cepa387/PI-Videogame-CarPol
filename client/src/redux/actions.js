import axios from "axios";

export const GET_USERS = "GET_USERS";
export const GET_USERSID = "GET_USERSID"
export const GET_GENRES = "GET_GENRES"
export const GET_SEARCH = "GET_SEARCH"
export const RESET = "RESET"
export const FILTER_BY_GENRE = "FILTER_BY_GENRE"
export const ORDER_ASC_RATING = "ORDER_ASC_RATING"
export const ORDER_DESC_RATING = "ORDER_DESC_RATING"
export const ORDER_BY_CREATOR = "ORDER_BY_CREATOR"


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

export function buscarGame(name){
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/videogames/name?name=${name}`)
        return dispatch({type: GET_SEARCH, payload: response.data
        })
    }
}

export const resetAll = (GET_USERS) => {
    return (dispatch) => {
        if(GET_USERS){
            return dispatch({type: RESET,  });
        }
      
    };
  };

  export const filterByGenre = (genres) => (dispatch, getState) => {
    let filteredGames = [];
  
    if (genres === "All") {
      filteredGames = getState().videogames;
    } else {
      filteredGames = getState().videogames.filter((game) =>
        (game.genres).includes(genres)
      )
    };
    dispatch({
      type: FILTER_BY_GENRE,
      payload: {
        genres,
        videogameGenre: filteredGames,
      },
    });
  };
  
  
  export const orderAsc = (type) => (dispatch, getState) => {
    const filtered = getState().filteredVideogames;
    let videogamesOrder = []
  
      if (type === "asc_name") {
        videogamesOrder = filtered.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
      } else if (type === "asc_rating") {
        videogamesOrder = filtered.sort(
          (a, b) => a.rating - b.rating
        );
      }
      dispatch({
        type: ORDER_ASC_RATING,
        payload: {
          videogamesOrder,
          name: type,
        },
      });
  }
  
  
  export const orderDesc = (type) => (dispatch, getState) => {
    const filtered = getState().filteredVideogames;
    let videogamesOrder = []
      
      if (type === "desc_name") {
        videogamesOrder = filtered.sort((a, b) => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        });
      } else if (type === "desc_rating") {
        videogamesOrder = filtered.sort(
          (a, b) => b.rating - a.rating
        );
      }
      dispatch({
        type: ORDER_DESC_RATING,
        payload: {
          videogamesOrder,
          name: type,
        },
      });
  }
  
  
  export const orderByCreator = (source) => (dispatch, getState) => {
    const videogames = getState().videogames.filter(function (G) {
        return G.source === source
      });
    return dispatch({
      type: ORDER_BY_CREATOR,
      payload: {
        videogames,
        source,
      },
    });
  };