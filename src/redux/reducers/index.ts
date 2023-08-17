import { combineReducers } from '@reduxjs/toolkit'
import loginSliceReducer from './loginSlice'
import { api } from '../../services/api'

const reducers = combineReducers({
    [api.reducerPath]: api.reducer,
    login: loginSliceReducer
})

export default reducers