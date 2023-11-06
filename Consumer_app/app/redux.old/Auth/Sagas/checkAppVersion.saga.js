import { ActionSheetIOS } from 'react-native';
import { put, call } from 'redux-saga/effects';
import { setData } from '../../../common/Methods';
import textStrings from '../../../common/textStrings';
import { config, APIS, getFullUrl } from '../../../Config';
import actionType from '../ActionType';
// import { setData } from '../../../common/Methods'
// import { textStrings, theme } from '../../../common';
// import Toast from "../../../components/ToastFlashMessage";
// import { addDataToTable, user_fields, user_field_count } from '../../../db/config'

export default function* checkAppVersion(action) {
  try {
    const response = yield call(config.POST, getFullUrl(APIS.checkAppVersion), action.params.data);

    let a = JSON.parse(response.data.d)
    const data = a
    if (response && response.data) {
      const userData = response.data;

      if (userData && response.data) {
        let newData = {};
        for (let i = 0; i < data.result.messages.length; i++) {
          if (data.result.messages[i].messageKey) {
            newData[data.result.messages[i].messageKey] = data.result.messages[i].messageValue;
          }
        }
        setLableData(newData);
        yield put({
          type: actionType.LANGUAGE_STORE_SUCCESS,
          payload: {
            data: userData.d,
            appVersion: newData,
          },
        })
       
      }

    } 
    else 
    {
      yield put({
        type: actionType.LANGUAGE_STORE_FAILURE,
      });
    }
  } catch (error) {
  
    console.log("error catch", error)
    yield put({
      type: actionType.LANGUAGE_STORE_FAILURE,
    })
  }
}

const setLableData = async (newData) => {
  await setData(textStrings.APP_VERSION, JSON.stringify(newData));
}
