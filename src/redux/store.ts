import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import reducers from './reducers'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, Storage, persistStore, persistReducer } from 'redux-persist'
import { api } from '../services/api'
import { MMKV } from 'react-native-mmkv'

const localStorage = new MMKV()
export const reduxStorage: Storage = {
    getItem: async (key) => {
        const value = localStorage.getString(key)
        return Promise.resolve(value)
    },
    setItem: (key, value) => {
        localStorage.set(key, value);
        return Promise.resolve(true)
    },
    removeItem: (key) => {
        localStorage.delete(key);
        return Promise.resolve(true)
    },
}

export const persistConfig = {
    key: "root",
    storage: reduxStorage,
    whitelist: ['auth'] // only auth state will be persisted in localstorage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => {
        const middlewares = getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        }).concat(api.middleware);

        // if (__DEV__) {
        //     const createDebugger = require('redux-flipper').default;
        //     middlewares.push(createDebugger())
        // }

        return middlewares
    }
})

const persistor = persistStore(store)

setupListeners(store.dispatch)

const reduxStore = { store, persistor }

export default reduxStore

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;