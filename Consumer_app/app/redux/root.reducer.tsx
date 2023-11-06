/*
             AUTHOR:   Khuram Haseeb
            SUMMARY:   Import all the reducers file in this file with combine redux combine hook
*/
//  import combineReducers hooks from the redux saga for combine of all reducer
import { combineReducers } from 'redux';
//  import MainReducers from "./Main/Reducers";
import AuthReducers from "./auth/auth.reducer";
//  in this function combine the all reducers file
const rootReducer = combineReducers({
    AuthReducers:AuthReducers,
});
export default rootReducer