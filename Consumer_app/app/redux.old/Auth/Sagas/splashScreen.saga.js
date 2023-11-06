/*
   AUTHOR:   Khuram Haseeb
  SUMMARY:   Static data of app load.
*/


// when a user open the app the static data will be load in the front end side
import { put, call } from 'redux-saga/effects';
import { config, APIS } from '../../../Config';
import actionType from '../ActionType';
import {env} from '../../../env';

export default function* getSplashScreen() {  
  try 
  {
    const response = yield call(config.POST, env.api_url + APIS.getSplashScreen);
    let result = JSON.parse(response.data);
   
    if (response && response.data) 
    {
      
      yield put({
        type: actionType.GET_SPLASH_SCREEN_SUCCESS,
        payload: {
          data: result.data,
        },
      })
    } else {

      yield put({
        type: actionType.GET_SPLASH_SCREEN_FAILURE,
      });
    }
  } catch (error) {
    
    yield put({
      type: actionType.GET_SPLASH_SCREEN_FAILURE,
    })
  }
}
