/*
             AUTHOR:   Khuram Haseeb
            SUMMARY:   its authentication action file that have functions used 
                       in different component to call the saga
*/
//  import the const file that have all values of const define
import actionType from './auth.constant';

//  get all the language request action
export function getLanguage(params: any) 
{
  return {
    type: actionType.LANGUAGE_REQUEST,
    params
  };
}
//  User profile Image upload action
export function userProfileImage(params: any) 
{
  return {
    type: actionType.USER_PROFILE_IMAGE_UPLOAD_REQUEST,
    params
  };
}
//  User profile Information action
export function userProfileSetupData(params: any) 
{
  return {
    type: actionType.USER_PROFILE_SETUP_DATA_REQUEST,
    params
  };
}
//  check the app version of the application using the action
export function checkAppVersion(params: any) 
{
  return {
    type: actionType.LANGUAGE_STORE_REQUEST,
    params
  };
}
// send sms using the send paarmeter from action to saga
export function sendAuthSMS(params: any) 
{
  return {
    type: actionType.AUTH_SEND_SMS_REQUEST,
    params
  };
}
// verify otp after enter the number by give sms 
export function otpVerify(params: any) 
{
  return {
    type: actionType.OTP_VERIFY_REQUEST,
    params
  };
}
//  get api call of privacy by using action
export function getPrivacy(params: any)
{
  return {
    type: actionType.GET_PRIVACY_REQUEST,
    params
  };
}
//  get terms request action
export function getTerms(params: any) 
{
  return {
    type: actionType.GET_TERMS_REQUEST,
    params
  };
}
//  VOCIE CALL FUNCTION
export function voiceCAll(params: any) 
{
  return {
    type: actionType.VOICE_CALL_REQUEST,
    params
  };
}

//  GET FB DATA by passing the user information
export function getFbData(params: any) 
{
  return {
    type: actionType.ADD_FB_REQUEST,
    params
  };
}
//  GET GMAIL DATA by passing the user information
export function getGmailData(params: any) 
{
  return {
    type: actionType.LOGIN_GMAIL_REQUEST,
    params
  };
}
//  GET APPLE DATA by passing the user information
export function getAppleData(params: any) 
{
  return {
    type: actionType.LOGIN_APPLE_REQUEST,
    params
  };
}
//  when a user open the app the static data will be load in the front end side
export function getSplashScreenAction(params: any) 
{
  return {
    type: actionType.GET_SPLASH_SCREEN_REQUEST,
    params
  };
}
//  User Verify otp request action
export function userVerifyOtp(params: any) 
{
  return {
    type: actionType.VERIFY_OTP_REQUEST,
    params
  };
}
//  User Resend verify otp request action
export function userResendVerifyOtpAction(params: any) 
{
  return {
    type: actionType.RESEND_VERIFY_OTP_REQUEST,
    params
  };
}
//  get slider static data from the server 
export function getSliderImages(params: any) 
{
  return {
    type: actionType.GET_SLIDER_IMAGE_REQUEST,
    params
  };
}
//  user login with phone number
export function customerResgistration(params: any) 
{
  return {
    type: actionType.CUSTOMER_REGISTRATION_REQUEST, params
  };
}
//  user login with social media 
export function socialResgistration(params: any)
{
  return {
    type: actionType.SOCIAL_REGISTRATION_REQUEST,
    params
  };
}
//  user sen dthe social media id to server
export function socialMediaId(params: any)
{
  return {
    type: actionType.SOCIAL_MEDIA_ID_REQUEST, params
  };
}
//  get country list data in the login screen 
export function countryCode(params: any)
{
  return {
    type: actionType.COUNTRY_CODE_REQUEST,
    params
  };
}
//  get signup static data load for whole application action
export function getSignupStaticdata()
{
  return {
    type: actionType.STATIC_SIGNUP_DATALOAD_REQUEST
  };
}