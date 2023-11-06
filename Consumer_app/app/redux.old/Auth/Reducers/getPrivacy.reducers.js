import actionType from '../ActionType';

const languageState = {
    isFetching: false,
    privacyData: []
}

const getPrivacy = (state = languageState, action) => { 
    switch (action.type) {
        case actionType.GET_PRIVACY_REQUEST:
            return { ...state, isFetching: true }
        case actionType.GET_PRIVACY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                privacyData: action.payload.data,
            }
        case actionType.GET_PRIVACY_FAILURE:
            return { ...state, isFetching: false }
        default:
            return state;
    }

}

export default getPrivacy