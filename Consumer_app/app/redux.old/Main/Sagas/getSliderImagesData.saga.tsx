import { put, call } from 'redux-saga/effects';
import { config, APIS, getFullUrl } from '../../../../Config';
import ActionTypes from '../ActionTypes';
import textStrings from "../../../common/textStrings" ;
import theme from "../../../common/theme" ;
import Toast from '../../../components/ToastFlashMessage';
import axios from 'axios';
    // API CALLING SAGA
export default function* getSliderImagesData(action: any) {
    try {
        const response = yield call(config.POST_WITH_HEADER, getFullUrl(APIS.getSliderImages), action.params.data);
        if (response && response.data && response.data.d ) 
        {
            let a = JSON.parse(response.data.d)
            const data = a
            yield put({
                type: ActionTypes.GET_SLIDER_IMAGE_SUCCESS,
                payload: {
                    data: data.result.restuarentMenu,
                },
            })

        } 
        else 
        {
            yield put({
                type: ActionTypes.GET_SLIDER_IMAGE_FAILURE,
                payload: {
                    error: 'error'
                }
            });
        }
    } catch (error: any) {
        if (error.message == textStrings.NetworkError) 
        {
            Toast.Message("Error", textStrings.NoInternetConnectionMsg, theme.colors.error)
        } else if (error.message == textStrings.TimeOutError) {
            Toast.Message("Error", textStrings.TimeOutMsg, theme.colors.error)
        }
        else 
        {
            Toast.Message("Error", error.message, theme.colors.error)
            console.log(error.message,error.response, 'error message ')
        }
        yield put({
            type: ActionTypes.GET_SLIDER_IMAGE_FAILURE,
            payload: {
                error: error.message
            }
        })
    }
}