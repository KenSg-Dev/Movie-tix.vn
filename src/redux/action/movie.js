import axios from "axios";
import * as ActionType from "./../constant/constant";
import {
    toast
} from 'react-toastify';


export const actGetInfoMovieApi = (id) => {
    return (dispatch) => {
        dispatch(actGetInfoMovieRequest());
        axios({
                method: "GET",
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
            }).then((result) => {
               
                dispatch(actGetInfoMovieSuccess(result.data, result.data.lichChieu))

            })
            .catch((error) => {
                
                console.log(error.response.data)
                dispatch(actGetInfoMovieFailed())

            })

    }
}

const actGetInfoMovieRequest = () => {
    return {
        type: ActionType.GET_INFO_MOVIE_ITEM_REQUEST
    }
}

const actGetInfoMovieSuccess = (data, lichChieu) => {
    return {
        type: ActionType.GET_INFO_MOVIE_ITEM_SUCCESS,
        payload: {data, lichChieu}
    }
}

const actGetInfoMovieFailed = () => {
    return {
        type: ActionType.GET_INFO_MOVIE_ITEM_FAILED,
      
    }
}