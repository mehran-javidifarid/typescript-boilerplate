import {Reducer} from 'redux'
import {configState, ConfigActionTypes} from './types'

export const initialState: configState = {
    language: "fa",
    time: 600,
    uniqCode: 'hbu4334udw8&%HGH6rr&66^F@(#*EU(*DchYY',
    setToHomeScreen:false,
    infoMode:false
}

const reducer: Reducer<configState> = (state = initialState, action) => {
    switch (action.type) {
        case ConfigActionTypes.SET_LANGUAGE: {
            return {...state, language: action.payload}
        }
        case ConfigActionTypes.SET_UNIQ_CODE: {
            return {...state, uniqCode: action.payload}
        }
        case ConfigActionTypes.SET_LOCK_TIME: {
            return {...state, time: action.payload || undefined}
        }
        case ConfigActionTypes.SET_PASSWORD_WALLET: {
            return {...state, password: action.payload || undefined}
        }
        case ConfigActionTypes.SET_TOHOMESCREEN: {
            return {...state, setToHomeScreen: action.payload}
        }
        case ConfigActionTypes.SET_APP_INFO_MODE: {
            return {...state, infoMode: !state.infoMode}
        }
        default: {
            return state
        }
    }
}

export {reducer as configReducer}