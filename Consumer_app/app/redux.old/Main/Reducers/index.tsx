import { combineReducers } from 'redux';
import customerRegistarionDataStateReducer from './customerResgistration.reducers';
import socialRegistrationDataStateReducer from './socialRegistration.reducers';
import getSliderImages from './getSliderImages.reducers';
import getSocialMediaId from './getSocialMediaId.reducers';
import countryCodeStateReducer from './countryCode.reducer';
    // COMBINE REDUCER
const mainReducers = combineReducers({
    getSliderImages,
    customerRegistarionDataStateReducer,
    socialRegistrationDataStateReducer,
    getSocialMediaId,
    countryCodeStateReducer,
    
})

export default rootReducer = (state: any, action: any) => {
    return AuthReducers(state, action);
}
// export default rootReducer;