import {combineReducers} from 'redux';
import getLanguage from "./getLanguage.reducers";
import checkAppVersion from "./checkAppVersion.reducers";
import sendAuthSMS from "./sendAuthSMS.reducers";
import otpVerify from "./otpVerify.reducers";
import getPrivacy from "./getPrivacy.reducers";
import voiceCall from "./voiceCAll.reducers";
import userProfileImageUploadReducer from './addprofilepicture.reducres';
import getFbData from './getFbData.reducers';
import userProfileSetupReducer from './addProfileData.reducer';
import splashScreenStatic from './splashScreen.reducer';
import verifyOtpReducer from './verifyotp.reducer';
import resendVerifyOtpReducer from './resend.verifyotp.reducer';

const authReducer = combineReducers({ 
    getLanguage,
    checkAppVersion,
    sendAuthSMS,
    otpVerify,
    getPrivacy,
    voiceCall,
    userProfileImageUploadReducer,
    getFbData,
    userProfileSetupReducer,
    splashScreenStatic,
    verifyOtpReducer,
    resendVerifyOtpReducer
});

export default rootReducer = (state, action) => {
    return authReducer(state, action);
  };