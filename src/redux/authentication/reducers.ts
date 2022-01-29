import {Reducer} from 'redux'
import {AuthenticationState, AuthenticationActionTypes} from './types'

export const initialState: AuthenticationState = {
  access: undefined,
  refresh: undefined,
  loading: false
}

const reducer: Reducer<AuthenticationState> = (state = initialState, action) => {
  switch (action.type) {
    case AuthenticationActionTypes.FETCH_LOGIN: {
      return {...state, loading: true}
    }
    case AuthenticationActionTypes.SET_LOGIN: {
      return {...state, loading: false, ...action.payload}
    }
    case AuthenticationActionTypes.SET_ERROR: {
      return {...state, loading: false}
    }
    default: {
      return state
    }
  }
}

export {reducer as authenticationReducer}
