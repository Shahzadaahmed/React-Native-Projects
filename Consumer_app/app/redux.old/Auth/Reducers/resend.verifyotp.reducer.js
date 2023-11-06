/*
               AUTHOR:   Khuram Haseeb
            SUMMARY:   login authenfication for resend verify otp number
                                
*/

//  import action type for reducer


import actionType from '../ActionType';

const resendVerifyOtpState = 
{
    isFetching : false,
    resendverifyOtp : [],
    
}
//  the user want to resend verify otp to the number reducer
const resendVerifyOtpReducer = (state = resendVerifyOtpState, action) => 
{ 
    switch (action.type) 
    {
        case actionType.RESEND_VERIFY_OTP_REQUEST:
            return { ...state, isFetching: true }
        case actionType.RESEND_VERIFY_OTP_SUCCESS:
            return {
                ...state,
                isFetching: false,
                resendverifyOtp: action.payload.data,
            }
        case actionType.RESEND_VERIFY_OTP_FAILURE:
            return { ...state, isFetching: false }
        default:
            return state;
    }

}

export default resendVerifyOtpReducer; 
