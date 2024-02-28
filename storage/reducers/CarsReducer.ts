import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const initialState: ICarSlice = {
	cars: []
}

export const CarSlice = createSlice({
	name: 'cars',
	initialState,
	reducers: {
		updateCars (state, action: PayloadAction<ICar[]>){
			state.cars = action.payload;
		},
		addCar (state, action: PayloadAction<ICar>){
			state.cars.push(action.payload)
		},
		editCar (state, action: PayloadAction<ICar>){
			const index = state.cars.findIndex((item) => item.id == action.payload.id)

			state.cars[index] = action.payload
		}
	}
})

export const updateCars = (cars: ICar[]) => CarSlice.actions.updateCars(cars)
export const addCar = (cars: ICar) => CarSlice.actions.addCar(cars)
export const editCar = (cars: ICar) => CarSlice.actions.editCar(cars)
export default CarSlice.reducer;
