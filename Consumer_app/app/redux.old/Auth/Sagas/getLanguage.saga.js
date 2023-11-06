import { put, call } from 'redux-saga/effects';
import { theme } from '../../../common';
import textStrings from '../../../common/textStrings';
import Toast from '../../../components/ToastFlashMessage';
import { config, APIS, getFullUrl } from '../../../Config';
import actionType from '../ActionType';
import {env} from '../../../env';

export default function* getLanguage(action) {  
  try {
    const response = yield call(config.GET,  env.api_url + APIS.getLanguages);
    console.log('response',response.data.languages)
    let a = response.data.languages
    const data = a

    
    if (response && response.data) 
    {
      const userData = response.data;
      yield put({
        type: actionType.LANGUAGE_SUCCESS,
        payload: {
          data: data,
            //   token: userData.token,
        },
      })
    }
    else 
    {
      yield put({
        type: actionType.LANGUAGE_FAILURE,
      });
    }
  } catch (error) {
    if (error.message == textStrings.NetworkError) 
    {
      Toast.Message("Error", textStrings.NoInternetConnectionMsg, theme.colors.error)
    } 
    else if (error.message == textStrings.TimeOutError) 
    {
      Toast.Message("Error", textStrings.TimeOutMsg, theme.colors.error)
    }   
    else 
    {
      Toast.Message("Error", error.message, theme.colors.error)
    }
    yield put({
      type: actionType.LANGUAGE_FAILURE,
    })
  }
}
