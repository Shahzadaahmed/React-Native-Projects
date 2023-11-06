import { put, call } from 'redux-saga/effects';
import textStrings from '../../../common/textStrings';
import Toast from '../../../common/ToastFlashMessage';
import { config, APIS, getFullUrl } from '../../../Config';
import actionType from '../ActionType';

export default function* voiceCall(action) {  
  try {
    const response = yield call(config.POST, getFullUrl(APIS.voiceCall), action.params.data);
    let a = JSON.parse(response.data.d)
    const data = a
    if (response && data.status == 1) 
    {
      const userData = response.data;
      yield put({
        type: actionType.VOICE_CALL_SUCCESS,
        payload: {
          data: data.result,
          mobileNumber: action.params.data.phone,
        },
      })
      
      if (userData) 
      {
        setData(textStrings.MOBILE_NUMBER, action.params.data.phone);
        setData(textStrings.USER_ID, data.result.userId.toString());
      }
      Toast.Message(textStrings.data.message, '', theme.colors.success)
    } else {

      yield put({
        type: actionType.VOICE_CALL_FAILURE,
      });

      if (data.message) {
        Toast.Message("Error", data.message, theme.colors.error)
      }
    }
  } catch (error) {
    
    yield put({
      type: actionType.VOICE_CALL_FAILURE,
    })
  }
}
