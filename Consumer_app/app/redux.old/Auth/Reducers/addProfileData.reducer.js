/*
   AUTHOR:   Khuram Haseeb
  SUMMARY:   User setUp profile Data.
*/

//  User setup Profile image upload Auth Reducer
import actionType from '../ActionType';

const languageState = 
{
    isFetching : false,
    profiledata : [],
    role : '',
    mobileNumber : ''
}
//  User Profile upload reducer
const userProfileSetupReducer = (state = languageState, action) => 
{ 
    switch (action.type) 
    {
        case actionType.USER_PROFILE_SETUP_DATA_REQUEST:
            return { ...state, isFetching: true }
        case actionType.USER_PROFILE_SETUP_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                voiceCallData: action.payload.data,
            }
        case actionType.USER_PROFILE_SETUP_DATA_FAILURE:
            return { ...state, isFetching: false }
        default:
            return state;
    }

}

export default userProfileSetupReducer; 
