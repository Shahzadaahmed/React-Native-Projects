/*
             AUTHOR:   Khuram Haseeb
            SUMMARY:   Import all the saga files in this file with combine rootSagas function
*/
//  import all, fork hooks from the redux saga for combine of all saga files
import { all, fork } from 'redux-saga/effects';
import  {AuthSagas} from './auth/auth.saga';
// MAIN SAGA function that combine all the saga files
export default function* rootSagas() {
    yield all([fork(AuthSagas)]);
  }