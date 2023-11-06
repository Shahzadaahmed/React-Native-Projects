"Each file should have header explaining the purpose/summary for the file.
/*
             AUTHOR:   Khuram Haseeb
            SUMMARY:   import the saga from the redux saga and in this file all the
                       authenfication saga function that used in the app 
*/
//  import the
import { put, call } from 'redux-saga/effects';
import { setData } from '../../../common/Methods';
import textStrings from '../../../common/textStrings';
import { config, APIS, getFullUrl } from '../../../Config';
import actionType from '../ActionType';
import {env} from '../../../env';

//  User Setup profile Data saga
export default function* userSetupProfileData(action)
 {
    try 
    {
        const response = yield call(config.POST, env.api_url + APIS.addprofile, action.params.data);
        let result = response.data;
        const data = result;
            const userData = response.data;
            action.params.navigation.navigate('Logout')
            yield put({
                type: actionType.USER_PROFILE_SETUP_DATA_SUCCESS,
                payload: 
                {
                    data: userData,
                },
            })
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
