import {  takeEvery } from "@redux-saga/core/effects";
import ActionTypes from "../ActionTypes";
import customerRegistrationData from "./customerRegistration.saga";
import getSliderImagesData from "./getSliderImagesData.saga";
import socialRegistration from "./socailRegistration.saga";
import socialMediaId from "./socialMediaId.saga";
import countryCode from "./countryCode.saga";
 // COMINE SAGA
export default function* MainSagas() {
    yield takeEvery(ActionTypes.GET_SLIDER_IMAGE_REQUEST, getSliderImagesData)
    // yield takeEvery(ActionTypes.CUSTOMER_REGISTRATION_REQUEST, customerRegistrationData)
    yield takeEvery(ActionTypes.SOCIAL_REGISTRATION_REQUEST, socialRegistration)
    yield takeEvery(ActionTypes.SOCIAL_MEDIA_ID_REQUEST, socialMediaId)
    yield takeEvery(ActionTypes.COUNTRY_CODE_REQUEST, countryCode)
}