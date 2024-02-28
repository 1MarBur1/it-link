import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const initialState: FiltersInitialState = {
	body: '',
	brand: '',
	end_mileage: 9999999999999,
	end_price: 9999999999999,
	model: '',
	productionYear: 0,
	start_mileage: 0,
	start_price: 0,
}

export const GlobalSettingsSlice = createSlice({
	name: 'cars',
	initialState,
	reducers: {
		updateFilters (state, action: PayloadAction<Partial<FiltersInitialState>>){
			state.body = action.payload.body ?? state.body
			state.brand = action.payload.brand ?? state.brand
			state.end_mileage = action.payload.end_mileage ?? state.end_mileage
			state.start_mileage = action.payload.start_mileage ?? state.start_mileage
			state.model = action.payload.model ?? state.model
			state.start_price = action.payload.start_price ?? state.start_price
			state.end_price = action.payload.end_price ?? state.end_price
			state.productionYear = action.payload.productionYear ?? state.productionYear
		},
	}
})

export const updateFilters = (filters: Partial<FiltersInitialState>) => GlobalSettingsSlice.actions.updateFilters(filters)
export default GlobalSettingsSlice.reducer;
