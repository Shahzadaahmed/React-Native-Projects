import ActionTypes from "../ActionTypes";

// STATE FOR REDUCER
const customerRegistarionDataState =  {
    isFetching: false,
    sliderImageData: null,
    error: '',
    token:''
    
}

// interface 
export type TypeOfAction =  {
    type: string
    payload: {
        data: object,
        error: object,
        token: object
    }
}
    // FUNCTION FOR REDUCER
const customerRegistarionDataStateReducer = (state = customerRegistarionDataState, action: TypeOfAction) => {
    switch (action.type) {
        case ActionTypes.CUSTOMER_REGISTRATION_REQUEST:
            return { ...state, isFetching: true }
        case ActionTypes.CUSTOMER_REGISTRATION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                sliderImageData: action.payload.data, error: null , token: action.payload.data
            }
        case ActionTypes.CUSTOMER_REGISTRATION_FAILURE:
            return { ...state, isFetching: false, error: action.payload.error }
        default:
            return state;
    }

}

export default customerRegistarionDataStateReducer;