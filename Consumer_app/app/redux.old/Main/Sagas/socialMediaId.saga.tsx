import { put, call } from 'redux-saga/effects';
import { config, APIS, getFullUrl } from '../../../../Config';
import ActionTypes from '../ActionTypes';
import textStrings from "../../../common/textStrings";
import theme from "../../../common/theme";
import Toast from '../../../components/ToastFlashMessage';
import { setData } from '../../../common/Methods';

// API CALLING SAGA
export default function* socialMediaId(action: any) {
    try {
        const response  = yield call(  );       
        if (response) {
            let a = JSON.parse(response.data.d)
            const data = a
            yield put({
                type: ActionTypes.SOCIAL_MEDIA_ID_SUCCESS,
                payload: {
                    data: data,
                },
            })
            Toast.Message("Success", textStrings.registerSuccess, theme.colors.success)
            
            
            let textD = action.params.textD;
            if (data) 
            {
                setData('registered', "1");
                if (textD == 'R') 
                {
                    action.params.navigation.navigate('LogoutArabic');
                } 
                else 
                {
                    action.params.navigation.navigate('Logout');
                }
            } 
            else 
            {
                action.params.navigation.navigate('profileSetup');
            }

        } else {
            yield put({
                type: ActionTypes.SOCIAL_MEDIA_ID_FAILURE,
                payload: {
                    error: 'error'
                }
            });
        }
    } catch (error: any) {
       
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
            type: ActionTypes.SOCIAL_MEDIA_ID_FAILURE,
            payload: {
                error: error.message
            }
        })
    }
}