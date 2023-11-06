/*
   AUTHOR:   Khuram Haseeb
  SUMMARY:   Splash Screen static Data load.
*/

//  when a user open the app the static data will be load in the front end side
import actionType from '../ActionType';

const SplashState = {
    isFetching: false,
    splashScreenData: [],
   
}
//  First time user enter splash screen static data load
const splashScreenStaticData = (state = SplashState, action) => 
{ 
    switch (action.type) 
    {
        case actionType.GET_SPLASH_SCREEN_REQUEST:
            return { ...state, isFetching: true }
        case actionType.GET_SPLASH_SCREEN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                splashScreenData: action.payload.data,
            }
        case actionType.GET_SPLASH_SCREEN_FAILURE:
            return { ...state, isFetching: false }
        default:
            return state;
    }

}

export default splashScreenStaticData; 
