import ActionTypes from "../ActionTypes";

// STATE FOR REDUCER
const socialMediaIdDataState = {
    isFetching: false,
    socialMediaIdData: null,
    error: '',
    token: '',
    

}

// interface 
export type TypeOfAction = {
    type: string
    payload: {
        socialMediaIdData: any,
        error: object,
        token: object,
    }
}
// FUNCTION FOR REDUCER
const socialMediaIdStateReducer = (state = socialMediaIdDataState, action: TypeOfAction) => {
    switch (action.type) {
        case ActionTypes.SOCIAL_MEDIA_ID_REQUEST:
            return { ...state, isFetching: true }
        case ActionTypes.SOCIAL_MEDIA_ID_SUCCESS:
            return {
                ...state,
                isFetching: false,
                socialMediaIdData: action.payload.data, error: null, token: action.payload.data
            }
        case ActionTypes.SOCIAL_MEDIA_ID_FAILURE:
            return { ...state, isFetching: false, error: action.payload.error }
        default:
            return state;
    }

}

export default socialMediaIdStateReducer;