import {combineReducers} from 'redux';
import userReducer from './user';
import movieReducer from './movie'
import listMovieReducer from '../../Container/HomeTemplate/ListMoviePage/module/reducer'
import cinemaReducer from './cinema';
import bookingReducer from '../../Container/HomeTemplate/BookingPage/modules/reducer'

const rootReducer = combineReducers({
    userReducer,
    listMovieReducer,
    movieReducer,
    cinemaReducer,
    bookingReducer,
    
 });
 export default rootReducer;