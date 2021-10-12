import * as ActionType from './constants'
import Axios from 'axios'


export const actGetListOfSeatApi = (id) => {
    return dispatch => {
        dispatch(actGetListOfSeatRequest())
        Axios({
          method: "GET",
          url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`
        })
          .then(result => {
            dispatch(actGetListOfSeatSuccess(result.data))
          })
          .catch(err => {
            console.log(err);
            dispatch(actGetListOfSeatFailed())
          });
      };
}

const actGetListOfSeatRequest = () => {
    return {
        type: ActionType.GET_LIST_OF_SEAT_CINEMA_REQUEST
    }
}

const actGetListOfSeatSuccess = (data) => {
    return {
        type: ActionType.GET_LIST_OF_SEAT_CINEMA_SUCCESS,
        payload: data
    }
}

const actGetListOfSeatFailed = () => {
    return {
        type: ActionType.GET_LIST_OF_SEAT_CINEMA_FAILED
    }
}

export const actChooseSeat = (seat) => {
    return {
        type: ActionType.CHOOSE_SEAT,
        payload: seat
    }
}

export const actUnClickSeat = (id) => {
    return {
        type: ActionType.UNCLICK_SEAT,
        payload: id
    }
}

export const actBookingTicketApi = (data, autho) => {
    return dispatch => {
        return Axios({
            method: "POST",
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`,
            data: data,
            headers: { Authorization: "Bearer " + autho },
          }).then(result => {
              console.log(result)
              dispatch(actBookingTicketSuccess())
              
          }).catch(err => {
              console.log(err);
          })
        }
    
    

}

const actBookingTicketSuccess = () => {
    return {
        type: ActionType.BOOKING_TICKET_API
    }
}