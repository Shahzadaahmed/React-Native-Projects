import ActionTypes from "../ActionTypes";

export function getSliderImages(params?: object) {
    return {
        type: ActionTypes.GET_SLIDER_IMAGE_REQUEST, params
    };
}
export function customerResgistration(params?: object) {
    return {
        type: ActionTypes.CUSTOMER_REGISTRATION_REQUEST, params
    };
}
export function socialResgistration(params?: object) {
    return {
        type: ActionTypes.SOCIAL_REGISTRATION_REQUEST, params
    };
}
export function socialMediaId(params?: object) {
    return {
        type: ActionTypes.SOCIAL_MEDIA_ID_REQUEST, params
    };
}
export function countryCode(params?: object) {
    return {
        type: ActionTypes.COUNTRY_CODE_REQUEST, params
    };
}