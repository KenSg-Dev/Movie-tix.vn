import * as ActionType from "../constant/constant";

const initialState = {
    listCinemaByMovie: [],
    listCinema: [],
    listCinemaById: [],
    schedule: []
    

};

const cinemaReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_LIST_CINEMA_BY_MOVIE_ID:
            state.listCinemaByMovie = action.payload;
            return {
                ...state
            };
        case ActionType.GET_LIST_CINEMA_API:
            state.listCinema = action.payload;
            return {...state}
        case ActionType.GET_SCHEDULE_BY_THEATERS_ID:
            state.schedule = action.payload;
            return {...state}
        
    
        default:
            return {
                ...state
            };
    }
};

export default cinemaReducer;