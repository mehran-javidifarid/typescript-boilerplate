export enum ConfigActionTypes {
  SET_LANGUAGE = '@@config/SET_LANGUAGE',
  SET_UNIQ_CODE = '@@config/SET_UNIQ_CODE',
  SET_LOCK_TIME = '@@config/SET_LOCK_TIME',
  SET_PASSWORD_WALLET = '@@config/SET_PASSWORD_WALLET',
  SET_TOHOMESCREEN = '@@config/SET_TOHOMESCREEN',
  SET_APP_INFO_MODE = '@@config/SET_APP_INFO_MODE',
}

export interface configState {
  readonly setToHomeScreen:boolean
  readonly language:  "fa" | "en"
  readonly uniqCode?: string
  readonly time?:number
  readonly password?:string
  readonly infoMode?:boolean
}