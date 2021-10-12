import * as ActionType from "../constant/constant";
import Axios from "axios";

export const actGetListCinemaByMovieIdApi = (id) => {
    return dispatch => {
        Axios({
          method: "GET",
          url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`
        })
          .then(result => {
            dispatch({
              type: ActionType.GET_LIST_CINEMA_BY_MOVIE_ID,
              payload: result.data
            });
          })
          .catch(err => {
            console.log(err);
          });
      };
}

export const actGetListTheatersApi = () => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`
    })
      .then(result => {
        dispatch({
          type: ActionType.GET_LIST_CINEMA_API,
          payload: result.data
        })
      })
      .catch(err => {
        console.log(err)
      }
      )
  }
}

export const actGetListTheatersByIdApi = (id) => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`
    })
      .then(result => {
        dispatch({
          type: ActionType.GET_LIST_THEATERS_BY_ID,
          payload: result.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const actGetListScheduleByTheaterId = (id) => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${id}&maNhom=GP07`
    })
      .then(result => {
        dispatch({
          type: ActionType.GET_SCHEDULE_BY_THEATERS_ID,
          payload: result.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

