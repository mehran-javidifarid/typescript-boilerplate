import {all, call, fork, put, takeLatest} from 'redux-saga/effects'
import {AuthenticationActionTypes} from './types'
import {fetchError, fetchLoginAction, setLoginAction} from './actions'
import {loginApi} from '../../services/api/authentication'

function* handleLogin(action: ReturnType<typeof fetchLoginAction>) {
  // const res = yield call(() => loginApi(action.payload));
  yield put(setLoginAction({access:'test',refresh:'test'}))

  // if (res) {
  //   yield put(setLoginAction(res))
  // } else {
  //   yield put(fetchError())
  // }
}

function* watchLogin() {
  yield takeLatest(AuthenticationActionTypes.FETCH_LOGIN, handleLogin)
}

function* authenticationSaga() {
  yield all([
    fork(watchLogin),
  ])
}

export default authenticationSaga
