import ActionTypes from "../ActionTypes";

// STATE FOR REDUCER
const countryCodeDataState = {
    isFetching: false,
    countryCode: null,
    error: '',
    token: '',
    

}

// interface 
export type TypeOfAction = {
    type: string
    payload: {
        countryCode: any,
        error: object,
        token: object,
    }
}
// FUNCTION FOR REDUCER
const countryCodeStateReducer = (state = countryCodeDataState, action: TypeOfAction) => {
    switch (action.type) {
        case ActionTypes.COUNTRY_CODE_REQUEST:
            return { ...state, isFetching: true }
        case ActionTypes.COUNTRY_CODE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                countryCode: action.payload.data, error: null, token: action.payload.data
            }
        case ActionTypes.COUNTRY_CODE_FAILURE:
            return { ...state, isFetching: false, error: action.payload.error }
        default:
            return state;
    }

}

export default countryCodeStateReducer;