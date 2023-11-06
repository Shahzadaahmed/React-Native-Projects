
/*
               AUTHOR:   Khuram Haseeb
            SUMMARY:   the user want to resend verify otp number
                                for authenfication login
*/


//  import all saga hooks for the api call resend verify otp
import { put, call } from 'redux-saga/effects';
import { config, APIS } from '../../../Config';
import actionType from '../ActionType';
import {env} from '../../../env';

// Resend verify opt request for login authenfication  
export default function* resendVerifyOtpSaga(action)
 {
    try 
    {
        const response = yield call(config.POST, env.api_url + APIS.resendOtp, action.params.data);
        let result = response.data;
        const data = result;
            const userData = response.data;
           
            yield put({
                type: actionType.RESEND_VERIFY_OTP_SUCCESS,
                payload: 
                {
                    data: userData,
                },
            })
            yield put({
                type: actionType.RESEND_VERIFY_OTP_FAILURE,
            });
    } 
    catch (error) 
    {
        yield put({
            type: actionType.RESEND_VERIFY_OTP_FAILURE,
        })
    }
}
