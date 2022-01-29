import { action } from 'typesafe-actions'
import { ConfigActionTypes  } from './types'

export const setLanguageAction = (language?: "fa" | "en") => action(ConfigActionTypes.SET_LANGUAGE, language)

export const setUniqCode = (uniqCode: string) => action(ConfigActionTypes.SET_UNIQ_CODE, uniqCode)

export const setLockTimeAction = (time?: number) => action(ConfigActionTypes.SET_LOCK_TIME,time);

export const setPasswordWalletAction = (password?: string) => action(ConfigActionTypes.SET_PASSWORD_WALLET, password);

export const setToHomeScreenAction = (setToHomeScreen: boolean) => action(ConfigActionTypes.SET_TOHOMESCREEN, setToHomeScreen)

export const setAppInfoMode = () => action(ConfigActionTypes.SET_APP_INFO_MODE)