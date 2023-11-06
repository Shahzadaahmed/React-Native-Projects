import { all, fork } from 'redux-saga/effects';
import * as AuthSagas from './Auth/Sagas';
import * as MainSagas from "./Main/Sagas";
// MAIN SAGA
export default function* rootSagas() {
    yield all(
      [
        ...Object.values(AuthSagas),
        ...Object.values(MainSagas),
      ].map(fork),
    );
  }