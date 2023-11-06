import { call } from 'redux-saga/effects';
import { setData } from '../../../common/Methods';
import { config, APIS, getFullUrl } from '../../../Config';

export default function* getFbData(action) {
    try 
    {
        const response =  yield call(config.POST, ('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + action.params.data));
        set_data(response.data);
    } 
    catch (error) 
    {
        
    }
}


const set_data = async(res) => {

   await setData('FbSignIN',JSON.stringify(res));
}