import actionType from '../ActionType';

const languageState = {
    isFetching: false,
    versionData: [],
    role: '',
    token: '',
    appVersion:'',
}

const checkAppVersionReducer = (state = languageState, action) => { 
    switch (action.type) {
        case actionType.LANGUAGE_STORE_REQUEST:
            return { ...state, isFetching: true }
        case actionType.LANGUAGE_STORE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                versionData: action.payload.data,
                appVersion: action.payload.appVersion,
                // token: action.payload.token,
            }
        case actionType.LANGUAGE_STORE_FAILURE:
            return { ...state, isFetching: false }
        default:
            return state;
    }

}

export default checkAppVersionReducer