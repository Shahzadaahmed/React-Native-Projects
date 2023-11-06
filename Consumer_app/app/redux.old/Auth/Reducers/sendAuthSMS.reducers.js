import actionType from '../ActionType';

const languageState = {
    isFetching: false,
    smsData: [],
    role: '',
    mobileNumber: ''
}

const sendAuthSMS = (state = languageState, action) => { //console.log(action);
    switch (action.type) {
        case actionType.AUTH_SEND_SMS_REQUEST:
            return { ...state, isFetching: true }
        case actionType.AUTH_SEND_SMS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smsData: action.payload.data,
                mobileNumber: action.payload.mobileNumber,
            }
        case actionType.AUTH_SEND_SMS_FAILURE:
            return { ...state, isFetching: false }
        default:
            return state;
    }

}

export default sendAuthSMS