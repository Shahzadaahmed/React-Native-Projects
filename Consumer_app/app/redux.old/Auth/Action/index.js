import actionType from '../ActionType';

export function getLanguage(params) 
{ 
  return {
    type: actionType.LANGUAGE_REQUEST,
    params 
  };
}

//  User profile Image upload action
export function userProfileImage(params) 
{ 
  return {
    type: actionType.USER_PROFILE_IMAGE_UPLOAD_REQUEST,
    params 
  };
}

//  User profile Information action
export function userProfileSetupData(params) 
{ 
  return {
    type: actionType.USER_PROFILE_SETUP_DATA_REQUEST,
    params 
  };
}


export function checkAppVersion(params) 
{ 
  return {
    type: actionType.LANGUAGE_STORE_REQUEST,
    params 
  };
}

export function sendAuthSMS(params) 
{ 
  return {
    type: actionType.AUTH_SEND_SMS_REQUEST,
    params 
  };
}

export function otpVerify(params) 
{ 
  return {
    type: actionType.OTP_VERIFY_REQUEST,
    params 
  };
}


export function getPrivacy(params)
{
  return {
    type: actionType.GET_PRIVACY_REQUEST,
    params 
  };
}

export function getTerms(params) 
{ 
  return {
    type: actionType.GET_TERMS_REQUEST,
    params 
  };
}

// VOCIE CALL FUNCTION
export function voiceCAll(params) 
{
  return {
    type: actionType.VOICE_CALL_REQUEST,
    params 
  };
}

 // GET FB DATA
export function getFbData(params) 
{ 
  return {
    type: actionType.ADD_FB_REQUEST,
    params
  };
}
 // when a user open the app the static data will be load in the front end side
export function getSplashScreenAction() 
{ 
  return {
    type: actionType.GET_SPLASH_SCREEN_REQUEST,
  };
}
 // User Verify otp request action
export function userVerifyOtp(params) 
{ 
  return {
    type: actionType.VERIFY_OTP_REQUEST,
    params
  };
}
 // User Resend verify otp request action
export function userResendVerifyOtpAction(params) 
{ 
  return {
    type: actionType.RESEND_VERIFY_OTP_REQUEST,
    params
  };
}