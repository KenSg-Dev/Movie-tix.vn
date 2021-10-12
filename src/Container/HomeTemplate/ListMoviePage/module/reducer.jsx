import * as ActionType from "./constants";

const initialState = {
  list: [],
  loading: false,
};

const listMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_MOVIE_REQUEST:
      state.loading = true;
      return {
        ...state,
      };
    case ActionType.GET_LIST_MOVIE_SUCCESS:
      
      state.list = action.payload;
      state.loading = false;
      return {
        ...state,
      };
    case ActionType.GET_LIST_MOVIE_FAILED:
      state.loading = false;
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default listMovieReducer;
