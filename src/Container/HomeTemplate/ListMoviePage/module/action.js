import axios from 'axios';
import * as ActionType from './constants'

export const actGetListMovieApi = () => {
    return dispatch => {
       dispatch(actGetListMovieRequest())
        axios({
                method: "GET",
                url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP07",

            })
            .then((result) => {
              
                dispatch(actGetListMovieSuccess(result.data))
            })
            .catch((err) => {
                console.log(err.response);
                dispatch(actGetListMovieFailed())
            });
    }
}

const actGetListMovieSuccess = (data) => {
    return {
        type: ActionType.GET_LIST_MOVIE_SUCCESS,
        payload: data
    }
}

const actGetListMovieRequest = () => {
    return {
        type: ActionType.GET_LIST_MOVIE_REQUEST,
    }
}
const actGetListMovieFailed = () => {
    return {
        type: ActionType.GET_LIST_MOVIE_FAILED,
    }
}