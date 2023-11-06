/*
             AUTHOR:   Khuram Haseeb
            SUMMARY:   import the reducer  from the redux saga and in this file all the
                       authenfication reducer function that used in the app 
*/

//  User setup Profile image upload Auth Reducer
import actionType from './auth.constant';
//  SET THE INITIAL STATE VARIABLE THAT WILL BE USED TO THE WHOLE APPLICATION.
const authState =
{
    isFetching: false,  // IF THE REQUEST CALL THEN THE BOOLEAN STATE CHANGE
    profiledata: [],    //  ALL THE USER PROFILE DATA USER
    voiceCallData: [],  //  AFTER REMOVE
    role: '',   //  AFTER REMOVE
    bannerImages: [],   //  AFTER REMOVE
    profile_picData: null,  //  USER PROFILE IMAGE LINK STORE FROM SERVER REQUEST
    versionData: [],    //  AFTER REMOVE
    appVersion: '', //  AFTER REMOVE
    getFbData: [],  //  WHEN USER LOGIN IN WITH FACEBOOK THEN DATA STORE
    getGmailData: [],   //  WHEN USER LOGIN WITH GOOGLE ACCOUNT THEN DATA STORE
    getAppleData: [],   //  WHEN USER LOGIN WITH APPLE ACCOUNT THEN DATA STORE
    lanData: [],    //  STATIC DATA STORE 
    privacyData: [],    //  AFTER REMOVE
    verifyData: [], //  AFTER REMOVE
    resendverifyOtp: [], // AFTER USER REQUEST FOR RESEND VERIFY SMS
    smsData: [],    //  AFTER REMOVE
    mobileNumber: '',   //  USER MOBILE NUMBER STORE AND USED IN THE VERIFY OTP REQUEST
    splashScreenData: [],   //  AFTER REMOVE
    verifyOtp: [],  //  AFTER VERIFU USER THEN STORE THE USER INFORMATION
    countryCode: null,  //  AFTER REMOVE
    socialMediaIdData: null,    //  AFTER REMOVE
    sliderImageData: null,  //  SLIDER STATIC DATA STORE
    token: '',  //  AFTER REMOVE
    error: '',  //  AFTER REMOVE
    data: null,     //  PAYLOAD DATA STORE
    staticSignupdata: null,  //  STATIC SIGNUP DATTA STORE THAT USED IN THE ERROR MESSAGE
    isFetchingSpliderScreen : false //  swhen split screen load then boolean state call
}
//  interface of state initilaized of the authentication
export type TypeOfAction = {
    type: string
    payload:
    {
        data: any,
        error: object,
        token: object,
        mobileNumber: string,
        appVersion: object
    }
}
//  all the authentication ,slider and user profile upload and profile data insside the reducer
const authenticationReducer = (state = authState, action: TypeOfAction) => 
{
    switch (action.type) 
    {
        //  user profile data setup request
        case actionType.USER_PROFILE_SETUP_DATA_REQUEST:
            return {...state, isFetching: true}
        //  user profile data setup success and store in 
        case actionType.USER_PROFILE_SETUP_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                voiceCallData: action.payload.data,
            }
        //  user profile setup data failure
        case actionType.USER_PROFILE_SETUP_DATA_FAILURE:
            return {...state, isFetching: false}
        //  user profile image data request from saga
        case actionType.USER_PROFILE_IMAGE_UPLOAD_REQUEST:
            return {...state, isFetching: true}
        //  user profile image data sucees and response from saga 
        case actionType.USER_PROFILE_IMAGE_UPLOAD_SUCCESS:
            return {
                ...state,
                isFetching: false,
                profile_picData: action.payload,
            }
        //  user profile image data failure and there is error from server    
        case actionType.USER_PROFILE_IMAGE_UPLOAD_FAILURE:
            return {...state, isFetching: false}
        // app version data request from saga    
        case actionType.LANGUAGE_STORE_REQUEST:
            return {...state, isFetching: true}
        // app version data come  from saga   and store in the versiondata state  
        case actionType.LANGUAGE_STORE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                versionData: action.payload.data,
                appVersion: action.payload.appVersion,
                // token: action.payload.token,
            }
        //  app version data failute from the saga
        case actionType.LANGUAGE_STORE_FAILURE:
            return {...state, isFetching: false}
        //  facebook data request come from developer of facebook and store in the server
        case actionType.ADD_FB_REQUEST:
            return {...state, isFetching: true}
        //  facebook data request come from developer of facebook and store in the server    
        case actionType.ADD_FB_SUCCESS:
            //  facebook login data data come from saga and store in getFbData state   
            return {
                ...state,
                isFetching: false,
                getFbData: action.payload.data,
            }
        //  facebook login data is error and no data come from saga    
        case actionType.ADD_FB_FAILURE:
            return {...state, isFetching: false}
        //  gmail data request
        case actionType.LOGIN_GMAIL_REQUEST:
            return {...state, isFetching: true}
        //  gmail data success   
        case actionType.LOGIN_GMAIL_SUCCESS:
            //  gmail login data data come from saga and store in getGmailData state   
            return {
                ...state,
                isFetching: false,
                getGmailData: action.payload.data,
            }
        //  gmail login data has error and no data come from saga    
        case actionType.LOGIN_GMAIL_FAILURE:
            return {...state, isFetching: false}
        //  apple data request
        case actionType.LOGIN_APPLE_REQUEST:
            return {...state, isFetching: true}
        //  apple data success   
        case actionType.LOGIN_APPLE_SUCCESS:
            //  apple login data data come from saga and store in getAppleData state   
            return {
                ...state,
                isFetching: false,
                getAppleData: action.payload.data,
            }
        //  apple login data has error and no data come from saga    
        case actionType.LOGIN_APPLE_FAILURE:
            return {...state, isFetching: false}
        //  when the app start then the first api call for language select request from saga
        case actionType.LANGUAGE_REQUEST:
            return {...state, isFetching: true}
        //  when the app start then the first api call for language select and data successfully store in lanData    
        case actionType.LANGUAGE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                lanData: action.payload.data,
                // token: action.payload.token,
            }
        //  the select language error and no result find    
        case actionType.LANGUAGE_FAILURE:
            return {...state, isFetching: false}
        //  get the api of privacy and request call
        case actionType.GET_PRIVACY_REQUEST:
            return {...state, isFetching: true}
        case actionType.GET_PRIVACY_SUCCESS:
            //  get the api call of privacy and data store in privacyData state    
            return {
                ...state,
                isFetching: false,
                privacyData: action.payload.data,
            }
        //  get the api call but found error    
        case actionType.GET_PRIVACY_FAILURE:
            return {...state, isFetching: false}
        //  when user enter then recived sms to verify the sms request call
        case actionType.OTP_VERIFY_REQUEST:
            return {...state, isFetching: true}
        //  when user enter then recived sms to verify the sms request call suceesfuly
        case actionType.OTP_VERIFY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                verifyData: action.payload.data,
                // token: action.payload.token,
            }
        //  when user enter then recived sms to verify the sms then show error      
        case actionType.OTP_VERIFY_FAILURE:
            return {...state, isFetching: false}
        //  when opt not put or wrong then resend opt request come request from saga
        case actionType.RESEND_VERIFY_OTP_REQUEST:
            return {...state, isFetching: true}
        //  when opt not put or wrong then resend opt request success come from saga
        case actionType.RESEND_VERIFY_OTP_SUCCESS:
            return {
                ...state,
                isFetching: false,
                resendverifyOtp: action.payload.data,
            }
        //  when opt not put or wrong then resend opt request come and show error
        case actionType.RESEND_VERIFY_OTP_FAILURE:
            return {...state, isFetching: false}
        //  user recived the sms for authentication request
        case actionType.AUTH_SEND_SMS_REQUEST:
            return {...state, isFetching: true}
        //   user recived the sms for authentication success    
        case actionType.AUTH_SEND_SMS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smsData: action.payload.data,
                mobileNumber: action.payload.mobileNumber,
            }
        //  user recived the sms for authentication failure
        case actionType.AUTH_SEND_SMS_FAILURE:
            return {...state, isFetching: false}
        // when user enter the app the static data api reducer request from saga
        case actionType.GET_SPLASH_SCREEN_REQUEST:
            return {...state, isFetchingSpliderScreen: true}
        // when user enter the app the static data api reducer succes from saga
        case actionType.GET_SPLASH_SCREEN_SUCCESS:
            return {
                ...state,
                isFetchingSpliderScreen: false,
                splashScreenData: action.payload.data,
                bannerImages: action.payload.data.banners,
            }
        // when user enter the app the static data api reducer failure from saga
        case actionType.GET_SPLASH_SCREEN_FAILURE:
            return {...state, isFetchingSpliderScreen: false}
        //  when user put the mobile then verify the four digit otp request from saga
        case actionType.VERIFY_OTP_REQUEST:
            return {...state, isFetching: true}
        //  when user put the mobile then verify the four digit otp succes from saga
        case actionType.VERIFY_OTP_SUCCESS:
            return {
                ...state,
                isFetching: false,
                verifyOtp: action.payload.data,
            }
        //  when user put the mobile then verify the four digit otp failure from saga
        case actionType.VERIFY_OTP_FAILURE:
            return {...state, isFetching: false}
        //  voice call authenfication of otp request
        case actionType.VOICE_CALL_REQUEST:
            return {...state, isFetching: true}
        //  voice call authenfication of otp success
        case actionType.VOICE_CALL_SUCCESS:
            return {
                ...state,
                isFetching: false,
                voiceCallData: action.payload.data,
            }
        //  voice call authenfication of otp failure
        case actionType.VOICE_CALL_FAILURE:
            return {...state, isFetching: false}
        // get country flag list of the authentication request
        case actionType.COUNTRY_CODE_REQUEST:
            return {...state, isFetching: true}
        // get country flag list of the authentication success
        case actionType.COUNTRY_CODE_SUCCESS:

            return {
                ...state,
                isFetching: false,
                countryCode: action.payload.data,
            }
        // get country flag list of the authentication failure
        case actionType.COUNTRY_CODE_FAILURE:
            return {...state, isFetching: false, error: action.payload.error}
        //  customer login with the mobile number request from saga
        case actionType.CUSTOMER_REGISTRATION_REQUEST:
            return {...state, isFetching: true}
        //  customer login with the mobile number success from saga
        case actionType.CUSTOMER_REGISTRATION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                sliderImageData: action.payload.data, error: null, token: action.payload.data
            }
        //  customer login with the mobile number failure from saga
        case actionType.CUSTOMER_REGISTRATION_FAILURE:
            return {...state, isFetching: false, error: action.payload.error}
        //  get silder data image ,text,hearder,background request from the static asy storage
        case actionType.GET_SLIDER_IMAGE_REQUEST:
            return {...state, isFetching: true}
        //  get silder data image ,text,hearder,background success from the static asy storage
        case actionType.GET_SLIDER_IMAGE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                sliderImageData: action.payload.data, error: null
            }
        //  get silder data image ,text,hearder,background failure from the static asy storage
        case actionType.GET_SLIDER_IMAGE_FAILURE:
            return {...state, isFetching: false, error: action.payload.error}
        //  login with the social id facebook request come from saga
        case actionType.SOCIAL_MEDIA_ID_REQUEST:
            return {...state, isFetching: true}
        //  login with the social id facebook success result come from saga
        case actionType.SOCIAL_MEDIA_ID_SUCCESS:
            return {
                ...state,
                isFetching: false,
                socialMediaIdData: action.payload.data, error: null, token: action.payload.data
            }
        //  login with the social id facebook failure come from saga
        case actionType.SOCIAL_MEDIA_ID_FAILURE:
            return {...state, isFetching: false, error: action.payload.error}
        // authentication with the social login request come from saga
        case actionType.SOCIAL_REGISTRATION_REQUEST:
            return {...state, isFetching: true}
        // authentication with the social login success come from saga
        case actionType.SOCIAL_REGISTRATION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload.data, error: null, token: action.payload.data
            }
        // authentication with the social login failure come from saga
        case actionType.SOCIAL_REGISTRATION_FAILURE:
            return {...state, isFetching: false, error: action.payload.error}
        // load the static data of the countries and other application used request 
        case actionType.STATIC_SIGNUP_DATALOAD_REQUEST:
            return {...state, isFetching: true}
        // load the static data of the countries and other application used success
        case actionType.STATIC_SIGNUP_DATALOAD_SUCCESS:
            return {
                ...state,
                isFetching: false,
                staticSignupdata: action.payload.data
            }
        // load the static data of the countries and other application used failure
        case actionType.STATIC_SIGNUP_DATALOAD_FAILURE:
            return {...state, isFetching: false, error: action.payload.error}

        default:
            return state;
    }

}
// EXPORT THE AUTH REDUCER SO IT CAN BE IMPORTED IN ROOT REDUCER.
export default authenticationReducer; 