import actionType from '../ActionType';

const FbState = {
    isFetching: false,
    getFbData: [],
}

const getFbData = (state = FbState, action) => { 
    switch (action.type) {
        case actionType.ADD_FB_REQUEST:
            return { ...state, isFetching: true }
        case actionType.ADD_FB_SUCCESS:
            return {
                ...state,
                isFetching: false,
                getFbData: action.payload.data,
            }
        case actionType.ADD_FB_FAILURE:
            return { ...state, isFetching: false }
        default:
            return state;
    }

}

export default getFbData