import ActionTypes from "../ActionTypes";

// STATE FOR REDUCER
const socialRegistarionDataState = {
    isFetching: false,
    sliderImageData: null,
    error: '',
    token: '',
    data: null,
}

// interface 
export type TypeOfAction = {
    type: string
    payload: {
        data: object,
        error: object,
        token: object
    }
}
// FUNCTION FOR REDUCER
const socialRegistrationDataStateReducer = (state = socialRegistarionDataState, action: TypeOfAction) => {
    switch (action.type) {
        case ActionTypes.SOCIAL_REGISTRATION_REQUEST:
            return { ...state, isFetching: true }
        case ActionTypes.SOCIAL_REGISTRATION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload.data, error: null, token: action.payload.data
            }
        case ActionTypes.SOCIAL_REGISTRATION_FAILURE:
            return { ...state, isFetching: false, error: action.payload.error }
        default:
            return state;
    }

}

export default socialRegistrationDataStateReducer;