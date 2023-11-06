import { put, call } from 'redux-saga/effects';
import { config, APIS, getFullUrl } from '../../../../Config';
import ActionTypes from '../ActionTypes';
import textStrings from "../../../common/textStrings";
import theme from "../../../common/theme";
import Toast from '../../../components/ToastFlashMessage';
import { setData } from '../../../common/Methods';

// API CALLING SAGA
export default function* socialRegistration(action: any) {
    console.log(action.params.data, 'social data');
    try {
        const response = yield call(config.POST_WITH_HEADER_TOKEN, getFullUrl(APIS.customerRegisterSocial), action.params.data);       
        if (response && response.data.d) {
            let a = JSON.parse(response.data.d)
            const data = a
            if (data.message == 'This email already exists.') 
            {
                Toast.Message("Error", textStrings.EmailExists, theme.colors.error);
                return false;
            }
            yield put({
                type: ActionTypes.SOCIAL_REGISTRATION_SUCCESS,
                payload: {
                    data: data.result.restuarentMenu,
                },
            })
            Toast.Message("Success", textStrings.registerSuccess, theme.colors.success)
            setData('registered', "1");
            let textD = action.params.textD;
            if (textD == 'R') 
            {
                action.params.navigation.navigate('LogoutArabic')
            } 
            else 
            {
                action.params.navigation.navigate('Logout')
            }

        } else {
            yield put({
                type: ActionTypes.SOCIAL_REGISTRATION_FAILURE,
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
            type: ActionTypes.SOCIAL_REGISTRATION_FAILURE,
            payload: {
                error: error.message
            }
        })
    }
}