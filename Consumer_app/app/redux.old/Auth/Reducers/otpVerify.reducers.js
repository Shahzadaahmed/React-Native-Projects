import actionType from '../ActionType';

const languageState = {
    isFetching: false,
    verifyData: [],
    role: '',
    token: ''
}

const optVerify = (state = languageState, action) => { //console.log(action);
    switch (action.type) {
        case actionType.OTP_VERIFY_REQUEST:
            return { ...state, isFetching: true }
        case actionType.OTP_VERIFY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                verifyData: action.payload.data,
                // token: action.payload.token,
            }
        case actionType.OTP_VERIFY_FAILURE:
            return { ...state, isFetching: false }
        default:
            return state;
    }

}

export default optVerify