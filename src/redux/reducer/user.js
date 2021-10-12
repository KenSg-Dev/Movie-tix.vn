import * as ActionType from "./../constant/constant";

const initialState = {
    user: {},
    listUser: [],
    infoUser: {},
    isLoading: false,
    maLichChieu: 0,
    isRequest: false,
    isSuccess: false,
    thongTinDatVe: []
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.USER_LOGIN_REQUEST:
            state.isLoading = true;
            return {
                ...state
            };

        case ActionType.USER_LOGIN_SUCCESS:
            state.isLoading = false;
            state.user = action.payload;
            return {
                ...state
            };
        case ActionType.USER_LOGIN_FAILED:
            state.isLoading = false;

            return {
                ...state
            };
        case ActionType.SET_USER_LOGIN:
            state.user = action.payload;
            return {
                ...state
            };

        case ActionType.GET_INFO_USER:
            state.infoUser = action.payload;
            let info = {...state.infoUser}
            state.thongTinDatVe = info.thongTinDatVe;

            return {
                ...state
            };

        case ActionType.LOGIN_BEFORE_BOOKING:
            state.maLichChieu = action.payload;
            return {
                ...state
            };

        case ActionType.RESET_BOOKING_ID:
            state.maLichChieu = 0;
            return {
                ...state
            };


        case ActionType.EDIT_USER_REQUEST:
            state.isRequest = true;
            state.isSuccess = false;
            return {
                ...state
            };

        case ActionType.EDIT_USER_SUCCESS:
            state.isRequest = false;
            state.isSuccess = true;
            state.user = action.payload;
            state.infoUser = action.payload;
            return {
                ...state
            };

        case ActionType.EDIT_USER_FAILED:
            state.isRequest = false;
            state.isSuccess = false;
            return {
                ...state
            };

        default:
            return {
                ...state
            };
    }
};

export default userReducer;