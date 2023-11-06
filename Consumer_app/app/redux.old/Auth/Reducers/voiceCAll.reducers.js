import actionType from '../ActionType';

const languageState = {
    isFetching: false,
    voiceCallData: [],
    role: '',
    mobileNumber: ''
}

const sendAuthSMS = (state = languageState, action) => { //console.log(action);
    switch (action.type) {
        case actionType.VOICE_CALL_REQUEST:
            return { ...state, isFetching: true }
        case actionType.VOICE_CALL_SUCCESS:
            return {
                ...state,
                isFetching: false,
                voiceCallData: action.payload.data,
            }
        case actionType.VOICE_CALL_FAILURE:
            return { ...state, isFetching: false }
        default:
            return state;
    }

}

export default sendAuthSMS