
const AppReducer =  (state,action) => {
    switch(action.type){
        case "ADD_TO_WATCHLIST":
            return{
                ...state,
                watchlist: [action.payload,...state.watchlist]
            };
        case "REMOVE_MOVIE_FROM_WATCHLIST":
            return{
                ...state,
                watchlist: state.watchlist.filter(movie => movie.id !== action.payload)
            }  
        case "ADD_TO_WATCHED":
            return{
                ...state,
                watchlist: state.watchlist.filter(movie => movie.id !== action.payload.id),
                watched:[action.payload,...state.watched]
            }  
        
        case "REMOVE_MOVIE_FROM_WATCHED":
            return{
                ...state,
                watched: state.watched.filter(movie => movie.id !== action.payload)
            }
        case "REMOVE_FROM_FAVOURITE":
            return{
                ...state,
                favourite:state.favourite.filter(movie=>movie.id!==action.payload)
            }    
        case "MOVE_TO_WATCHLIST":
            return {
                ...state,
                watched: state.watched.filter(movie => movie.id !== action.payload.id),
                watchlist:[action.payload,...state.watchlist]
            } 
        case "ADD_TO_FAVOURITE":
            return{
                ...state,
                favourite:[action.payload,...state.favourite]
            } 
        case "CHANGE_HEART_ICON":
            return{
                ...state,
                hearticon:[action.payload,...state.hearticon]
            }              
        default:
            return state
    }
};
export default  AppReducer;