
/*
               AUTHOR:   Khuram Haseeb
            SUMMARY:   the user want to verify otp number
                                for authenfication login
*/


//  import all saga hooks for the api call verify otp
import { put, call } from 'redux-saga/effects';
import { config, APIS } from '../../../Config';
import actionType from '../ActionType';
import {env} from '../../../env';

// verify opt request for login authenfication  
export default function* verifyOtpSaga(action)
 {
    
    try 
    {
        const response = yield call(config.POST, env.api_url + APIS.verifyOtp, action.params.data);
   
        
        let result = response.data;
        const data = result;
            const userData = response.data;
           
            yield put({
                type: actionType.VERIFY_OTP_SUCCESS,
                payload: 
                {
                    data: userData,
                },
            })
            yield put({
                type: actionType.VERIFY_OTP_FAILURE,
            });
    } 
    catch (error) 
    {
        yield put({
            type: actionType.VERIFY_OTP_FAILURE,
        })
    }
}
