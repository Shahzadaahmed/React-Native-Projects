import actionType from '../ActionType';

const languageState = {
    isFetching: false,
    lanData: [],
    role: '',
    token: ''
}

const getLanReducer = (state = languageState, action) => { //console.log(action);
    switch (action.type) {
        case actionType.LANGUAGE_REQUEST:
            return { ...state, isFetching: true }
        case actionType.LANGUAGE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                lanData: action.payload.data,
                // token: action.payload.token,
            }
        case actionType.LANGUAGE_FAILURE:
            return { ...state, isFetching: false }
        default:
            return state;
    }

}

export default getLanReducer