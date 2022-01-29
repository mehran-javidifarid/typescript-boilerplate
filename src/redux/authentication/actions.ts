import { action } from 'typesafe-actions'
import { ILogin,AuthenticationActionTypes } from './types'

export const fetchLoginAction = (data:ILogin) => action(AuthenticationActionTypes.FETCH_LOGIN,data);
export const setLoginAction = (data:any) => action(AuthenticationActionTypes.SET_LOGIN,data);
export const fetchError = () => action(AuthenticationActionTypes.SET_ERROR);
