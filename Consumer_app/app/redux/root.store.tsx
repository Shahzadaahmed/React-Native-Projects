/*
             AUTHOR:   Khuram Haseeb
            SUMMARY:   Import all the root reducer file  and root saga file 
                        combine all the redux files in the main store file
*/
//  import createStore,applyMiddleware  hooks from the redux  combine of all reducer and saga files
import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import rootReducers from './root.reducer';
import rootSagas from './root.saga';
//  import the saga middleware function
const sagaMiddleware = createSagaMiddleware();
//  combine the sagag file with middleware
const middleware = [createLogger({collapsed: true}), sagaMiddleware];
//  use the redux window extension for seeing the output
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    shouldHotReload: true,
  })
  : compose;
//  cobine the root reducer with store apply middleware
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(...middleware)));
sagaMiddleware.run(rootSagas);

export default store;

