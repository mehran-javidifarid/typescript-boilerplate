import {combineReducers} from 'redux'
import {all, fork} from 'redux-saga/effects'
import {connectRouter, RouterState} from 'connected-react-router'
import {History} from 'history'
import {AuthenticationState} from './authentication/types'
import {configReducer} from './config/reducers'
import {configState} from './config/types'
import authenticationSaga from "./authentication/sagas";
import {authenticationReducer} from "./authentication/reducers";

export interface ApplicationState {
  authentication: AuthenticationState,
  router: RouterState,
  config: configState,
}

export const createRootReducer = (history: History) =>
  combineReducers({
    authentication: authenticationReducer,
    router: connectRouter(history),
    config: configReducer,
  });

export function* rootSaga() {
  yield all([
    fork(authenticationSaga),
  ])
}
