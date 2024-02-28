import {configureStore, combineReducers} from "@reduxjs/toolkit";

import CarsReducer from "./reducers/CarsReducer";
import FiltersReducer from "./reducers/FiltersReducer";

const rootReducer = combineReducers({
    cars: CarsReducer,
    filters: FiltersReducer,
})
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>

export type AppDispatch = AppStore['dispatch']