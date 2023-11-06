import { put, call } from 'redux-saga/effects';
import { setData } from '../../../common/Methods';
import textStrings from '../../../common/textStrings';
import { config, APIS, getFullUrl } from '../../../Config';
import actionType from '../ActionType';
// import { setData } from '../../../common/Methods'
// import { textStrings, theme } from '../../../common';
// import Toast from "../../../components/ToastFlashMessage";
// import { addDataToTable, user_fields, user_field_count } from '../../../db/config'

export default function* getPrivacy(action) {  
  try {
    const response = yield call(config.POST, getFullUrl(APIS.getcontent), action.params.data);
    let a = JSON.parse(response.data.d)
    const data = a
    if (response && response.data) {
      const userData = response.data;
      yield put({
        type: actionType.GET_PRIVACY_SUCCESS,
        payload: {
          data: data.result,
        },
      })
    } else {

      yield put({
        type: actionType.GET_PRIVACY_FAILURE,
      });
    }
  } catch (error) {
    
    yield put({
      type: actionType.GET_PRIVACY_FAILURE,
    })
  }
}
