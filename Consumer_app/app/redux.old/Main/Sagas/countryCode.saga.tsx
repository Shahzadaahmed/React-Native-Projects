import { put, call } from 'redux-saga/effects';
import { config, APIS, getFullUrl } from '../../../../Config';
import ActionTypes from '../ActionTypes';
import textStrings from "../../../common/textStrings";
import { setData } from '../../../common/Methods';

// API CALLING SAGA
export default function* countryCode(action: any) {
    try {
        const response = yield call(config.GET, ('https://iplist.cc/api/'));
        if (response && response.data) 
        {
            let data  = response.data; 
            yield put({
                type: ActionTypes.COUNTRY_CODE_SUCCESS,
                payload: {
                    data: data.countrycode,
                },
            })
            setData('countryCode', data.countrycode);
        } 
        else 
        {
            yield put({
                type: ActionTypes.COUNTRY_CODE_FAILURE,
                payload: {
                    error: 'error',
                    data:'AF'
                }
            });
        }
    } catch (error: any) {
        yield put({
            type: ActionTypes.COUNTRY_CODE_FAILURE,
            payload: {
                error: error.message,
                data:'AF'
            }
        })
    }
}