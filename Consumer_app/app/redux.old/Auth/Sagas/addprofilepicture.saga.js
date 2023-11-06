/*
   AUTHOR:   Khuram Haseeb
  SUMMARY:   User Upload profile image.
*/

//  User Profile image upload Saga
import { put, call } from 'redux-saga/effects';
import { setData } from '../../../common/Methods';
import textStrings from '../../../common/textStrings';
import { config, APIS, getFullUrl } from '../../../Config';
import actionType from '../ActionType';
import {env} from '../../../env';

//  User Profile image upload Saga
export default function* userProfileImageUpload(action)
 {
    try 
    {
        const sendData ={
            user_id: action.params.customerId,
            imageData:action.params.data
        }
        const response = yield call(config.POST, env.api_url + APIS.addprofilePhoto,sendData);
        let result = response.data
        const data = result;

            const userData = response.data;
            yield put({
                type: actionType.USER_PROFILE_IMAGE_UPLOAD_SUCCESS,
                payload: 
                {
                    data: userData,
                },
            })

            if (userData && response.data) 
            {
                let newData = {};
                for (let i = 0; i < data.result.messages.length; i++) 
                {
                    if (data.result.messages[i].messageKey)
                     {
                        newData[data.result.messages[i].messageKey] = data.result.messages[i].messageValue;
                    }
                }
                setData(textStrings.APP_VERSION, JSON.stringify(newData));
                setData(textStrings.LANGUAGE_ID, action.params.data.languageId.toString());
            }
            yield put({
                type: actionType.USER_PROFILE_IMAGE_UPLOAD_FAILURE,
            });
    } 
    catch (error) 
    {
        yield put({
            type: actionType.USER_PROFILE_IMAGE_UPLOAD_FAILURE,
        })
    }
}
