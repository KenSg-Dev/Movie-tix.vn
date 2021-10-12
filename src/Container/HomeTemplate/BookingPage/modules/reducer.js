import * as ActionType from './constants'

const initialState = {
    ticketRoom: {},
    loadingSeat: false,
    listSeat: [],
    isBooking: false,


};

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_LIST_OF_SEAT_CINEMA_REQUEST:
            state.loadingSeat = true;
            state.isBooking = false;
            return {
                ...state
            };

        case ActionType.GET_LIST_OF_SEAT_CINEMA_SUCCESS:
            state.loadingSeat = false;
            state.ticketRoom = action.payload;
            return {
                ...state
            };

        case ActionType.GET_LIST_OF_SEAT_CINEMA_FAILED:
            state.loadingSeat = false;
            return {
                ...state
            };

        case ActionType.CHOOSE_SEAT:
            state.listSeat = [...state.listSeat, action.payload]
            return {
                ...state
            }

        case ActionType.UNCLICK_SEAT:
            let _list = [...state.listSeat]
            let index = _list.findIndex((item) => {
                return item.maGhe === action.payload
            })
            if(index!==-1){
                _list.splice(index,1)
            }
            state.listSeat = _list;
            return {
                ...state
            }

        case ActionType.BOOKING_TICKET_API:
            state.listSeat = [];
            state.isBooking = true;
            return {...state}
        default:
            return {
                ...state
            };
    }
};

export default bookingReducer;