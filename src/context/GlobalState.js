import React, {createContext, useEffect, useReducer} from "react";

import AppReducer from "./AppReducer";

//initial state



const initialState = {
    watchlist:localStorage.getItem("watchlist") ?
    JSON.parse(localStorage.getItem("watchlist")) : [],
    watched: localStorage.getItem("watched") ?
    JSON.parse(localStorage.getItem("watched")) : [] ,
    favourite: localStorage.getItem("favourite") ?
    JSON.parse(localStorage.getItem("favourite")) : []
    // hearticon:localStorage.getItem("hearticon")?
    // JSON.parse(localStorage.getItem("hearticon")):[]
};

export const GlobalContext = createContext(initialState);


 export const GlobalProvider = (props) => {
    const [state,dispatch] = useReducer(AppReducer,initialState);
    useEffect(()=>{
        localStorage.setItem("watchlist",JSON.stringify(state.watchlist));
        localStorage.setItem("watched",JSON.stringify(state.watched)); 
        localStorage.setItem("favourite",JSON.stringify(state.favourite)); 
        // localStorage.setItem("hearticon",JSON.stringify(state.hearticon)); 
           },[state])
    const addToWatchlist = (movie) => {
dispatch({
    type:"ADD_TO_WATCHLIST",
    payload: movie
});
    }
const changeheareticon = (id) => {
    dispatch({
type: "CHANGE_HEART_ICON",
payload:id
    })
    };
const removeFromWatchlist = (id) => {
    dispatch({
        type: "REMOVE_MOVIE_FROM_WATCHLIST",
        payload: id
    });
};
const addToWatched = (movie) =>{
    dispatch({
        type:"ADD_TO_WATCHED",
        payload: movie
    })
}
const moveToWatchlist = (movie) =>{
    dispatch({
        type:"MOVE_TO_WATCHLIST",
        payload:movie
    })
}

const removeFromWatched = (id) => {
    dispatch({
        type: "REMOVE_MOVIE_FROM_WATCHED",
        payload: id
    });
}
const removeFromFavourite = (id) =>{
    dispatch({
        type:"REMOVE_FROM_FAVOURITE",
        payload:id
    });
}
const addToFavourite = (movie) =>{
  dispatch({
    type:"ADD_TO_FAVOURITE",
    payload:movie
  })
};


  return(
    <GlobalContext.Provider
    value={{
         watchlist: state.watchlist,
        watched: state.watched,
        addToWatchlist,
        removeFromWatchlist,
        addToWatched,
        removeFromWatched,
        moveToWatchlist,
        favourite:state.favourite,
        addToFavourite,
        removeFromFavourite,
        hearticon:state.hearticon,
        changeheareticon


      
    }}>
{props.children}
    </GlobalContext.Provider>

  )
}
