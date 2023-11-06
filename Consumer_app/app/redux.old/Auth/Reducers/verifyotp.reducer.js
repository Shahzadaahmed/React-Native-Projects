/*
               AUTHOR:   Khuram Haseeb
            SUMMARY:   login authenfication for  verify otp number
                                
*/

//  import action type for reducer


import actionType from '../ActionType';

const verifyOtpState = 
{
    isFetching : false,
    verifyOtp : [],
    
}
//  the user want to verify otp to the number reducer
const verifyOtpReducer = (state = verifyOtpState, action) => 
{ 
    switch (action.type) 
    {
        case actionType.VERIFY_OTP_REQUEST:
            return { ...state, isFetching: true }
        case actionType.VERIFY_OTP_SUCCESS:
            return {
                ...state,
                isFetching: false,
                verifyOtp: action.payload.data,
            }
        case actionType.VERIFY_OTP_FAILURE:
            return { ...state, isFetching: false }
        default:
            return state;
    }

}

export default verifyOtpReducer; 
