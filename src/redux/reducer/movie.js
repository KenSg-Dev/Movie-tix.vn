import * as ActionType from "./../constant/constant";

const initialState = {
    infoMovie: {},
    lichChieu: [],
    loading: false,
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_INFO_MOVIE_ITEM_REQUEST:
            state.loading = true;
            return {
                ...state
            };

        case ActionType.GET_INFO_MOVIE_ITEM_SUCCESS:
            state.loading = false;
            state.infoMovie = action.payload.data;
            state.lichChieu = action.payload.lichChieu
            return {
                ...state
            };
        case ActionType.GET_INFO_MOVIE_ITEM_FAILED:
            state.loading = false;

            return {
                ...state
            };
       

        default:
            return {
                ...state
            };
    }
};

export default movieReducer;