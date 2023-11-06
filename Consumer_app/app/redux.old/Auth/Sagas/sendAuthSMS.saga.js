/*
   AUTHOR:   Khuram Haseeb
  SUMMARY:   User AUTH SMS Saga
*/

//  User AUTH SMS Saga
import { put, call } from 'redux-saga/effects';
import { theme } from '../../../common';
import textStrings from '../../../common/textStrings';
import Toast from '../../../common/ToastFlashMessage';
import { config, APIS, getFullUrl } from '../../../Config';
import actionType from '../ActionType';
import {env} from '../../../env';
import { setData } from '../../../common/Methods';
//  User Setup AUTH SMS saga
export default function* sendAuthSMS(action) { 
 

  try 
  {
    const response = yield call(config.POST, env.api_url + APIS.resendMobileOtp2, action.params.data);
    console.log(`response`,response.data);
    
      let a = response.data
      const data = a
      yield put({
            type: actionType.AUTH_SEND_SMS_SUCCESS,
            payload: {
              data: data,
              mobileNumber: action.params.data.mobile,
            },
          })
          action.params.navigation.navigate('verifyotpComponent', {userId : data.user_id})
          // setLableData(data.user_id.toString())
        if (data) 
        {
            // setData(textStrings.USER_ID, data.user_id.toString());
          }
          Toast.Message(data.message, '', theme.colors.success)          

          yield put({
            type: actionType.AUTH_SEND_SMS_FAILURE,
          });

          if (data.status == 4) {
            Toast.Message("Error", data.message, theme.colors.error)
          }
  } 
  catch (error) 
  {
    yield put({
      type: actionType.AUTH_SEND_SMS_FAILURE,
    })
  }
}

const setLableData = async (newData) => {
  await setData(textStrings.USER_ID, newData );
}