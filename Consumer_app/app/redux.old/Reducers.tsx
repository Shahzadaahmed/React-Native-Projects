import { combineReducers } from 'redux';
import MainReducers from "./Main/Reducers";
import AuthReducers from "./Auth/Reducers";
// MAIN REDUCER
const appReducer = combineReducers({
    MainReducers,
    AuthReducers,
});

const rootReducer = (state:any, action:any) => {
  return appReducer(state, action);
};

export default rootReducer