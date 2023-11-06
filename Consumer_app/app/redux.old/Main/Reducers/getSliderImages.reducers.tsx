import ActionTypes from "../ActionTypes";

// STATE FOR REDUCER
const sliderImgDataState =  {
    isFetching: false,
    sliderImageData: null,
    error: '',
    
}

// interface 
export type TypeOfAction =  {
    type: string
    payload: {
        data: object,
        error: object
    }
}
    // FUNCTION FOR REDUCER
const sliderImgDataStateReducer = (state = sliderImgDataState, action: TypeOfAction) => {
    switch (action.type) {
        case ActionTypes.GET_SLIDER_IMAGE_REQUEST:
            return { ...state, isFetching: true }
        case ActionTypes.GET_SLIDER_IMAGE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                sliderImageData: action.payload.data, error: null
            }
        case ActionTypes.GET_SLIDER_IMAGE_FAILURE:
            return { ...state, isFetching: false, error: action.payload.error }
        default:
            return state;
    }

}

export default sliderImgDataStateReducer;