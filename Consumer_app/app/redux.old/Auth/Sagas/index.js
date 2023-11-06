// import doRegister from "./doRegister.saga";
// import forgotPassword from "./forgotPassword.saga";
import actionType from "../ActionType";
import {takeLatest, takeEvery} from 'redux-saga/effects';
import getLanguage from "./getLanguage.saga";
import checkAppVersion from "./checkAppVersion.saga";
import sendAuthSMS from "./sendAuthSMS.saga";
import otpVerify from "./otpVerify.saga";
import getPrivacy from "./getPrivacy.saga";
import voiceCall from "./voiceCall.saga";
import userProfileImageUpload from "./addprofilepicture.saga";
import getFbData from "./getFbData.saga";
import addProfileData from './addProfileData.saga';
import getSplashScreen from './splashScreen.saga';
import verifyOtpSaga from "./verifyotp.saga";
import resendVerifyOtpSaga from "./resendotp.saga";

export default function* AuthSagas() { 
    yield takeEvery(actionType.LANGUAGE_REQUEST, getLanguage);
    yield takeEvery(actionType.LANGUAGE_STORE_REQUEST, checkAppVersion);
    yield takeEvery(actionType.AUTH_SEND_SMS_REQUEST, sendAuthSMS);
    yield takeEvery(actionType.OTP_VERIFY_REQUEST, otpVerify);
    yield takeEvery(actionType.GET_PRIVACY_REQUEST, getPrivacy);
    yield takeEvery(actionType.VOICE_CALL_REQUEST, voiceCall);
    yield takeEvery(actionType.USER_PROFILE_IMAGE_UPLOAD_REQUEST, userProfileImageUpload);
    yield takeEvery(actionType.ADD_FB_REQUEST, getFbData);
    yield takeEvery(actionType.USER_PROFILE_SETUP_DATA_REQUEST, addProfileData);
    yield takeEvery(actionType.GET_SPLASH_SCREEN_REQUEST, getSplashScreen);
    yield takeEvery(actionType.VERIFY_OTP_REQUEST, verifyOtpSaga);
    yield takeEvery(actionType.RESEND_VERIFY_OTP_REQUEST, resendVerifyOtpSaga);
}