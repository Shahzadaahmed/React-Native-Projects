/*
   AUTHOR:   Khuram Haseeb
  SUMMARY:   User Upload profile image.
*/

//  User Profile image upload Auth Reducer


import actionType from '../ActionType';

const languageState = {
    isFetching: false,
    profiledata: [],
    role: '',
    mobileNumber: '',
    profile_picData: null,
}
//  User Profile upload reducer
const userProfileImageUploadReducer = (state = languageState, action) => 
{ 
    switch (action.type) 
    {
        case actionType.USER_PROFILE_IMAGE_UPLOAD_REQUEST:
            return { ...state, isFetching: true }
        case actionType.USER_PROFILE_IMAGE_UPLOAD_SUCCESS:
            return {
                ...state,
                isFetching: false,
                profile_picData: action.payload,
            }
        case actionType.USER_PROFILE_IMAGE_UPLOAD_FAILURE:
            return { ...state, isFetching: false }
        default:
            return state;
    }

}

export default userProfileImageUploadReducer; 
