import { useEffect } from 'react';
import { put, call } from 'redux-saga/effects';
import { theme } from '../../../common';
import { setData } from '../../../common/Methods';
import textStrings from '../../../common/textStrings';
import Toast from '../../../components/ToastFlashMessage';
import { config, APIS, getFullUrl } from '../../../Config';
import actionType from '../ActionType';


export default function* otpVerify(action) {  
  try 
  {
    const response = yield call(config.POST, getFullUrl(APIS.otpVerification), action.params.data);  
    let a = JSON.parse(response.data.d)
    const data = a
    if (response && data.status == 1) 
    {
      setData('UserSession','In');
      yield put({
        type: actionType.OTP_VERIFY_SUCCESS,
        payload: {
          data: data.result,
        },
      })
      setData('customerId', JSON.stringify(data.result.customerId));
      if (data.result.name == "")
      {
        action.params.navigation.navigate('profileSetup', { customerID: (data.result && data.result.customerId) ? data.result.customerId : 0});
      } 
      else 
      {
        setData('registered', '1');
        let textD = action.params.textD;
        if (textD == 'R') {
          action.params.navigation.navigate('LogoutArabic')
        } else {
          action.params.navigation.navigate('Logout')
        }
      }
      
      Toast.Message(data.message, '', theme.colors.success)
    } 
    else 
    {
      yield put({
        type: actionType.OTP_VERIFY_FAILURE,
      });
      if (data.status === 4) {
        console.log(data.message);
        Toast.Message(data.message, '', theme.colors.error)
      } 
    }
  } catch (error) {
    if (error.message == textStrings.NetworkError) 
    {
      Toast.Message("Error", textStrings.NoInternetConnectionMsg, theme.colors.error)
    } 
    yield put({
      type: actionType.OTP_VERIFY_FAILURE,
    })
  }
}

