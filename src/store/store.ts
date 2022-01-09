import {combineReducers, configureStore} from "@reduxjs/toolkit";
import carReducer from "./reducers/CarsSlice"

const rootReducer = combineReducers({
    carReducer
})

export const setupStore = () => {
    return configureStore ( {
        reducer: rootReducer
    })
}

export type RootState = ReturnType <typeof rootReducer>
export type AppStore = ReturnType <typeof setupStore>
export type AppDispatch = AppStore['dispatch']