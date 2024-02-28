interface ICarSlice {
	cars: ICar[]
}

interface ICar {
	id: number,
	images: string[],
	name: string,
	description: string,
	price: number,
	contacts: string,
	technical_characteristics?: ITechnicalCharacteristics,
	options?: IOption[]
}

interface ITechnicalCharacteristics {
	car_id: number,
	brand: string,
	model: string,
	productionYear: number,
	body: string,
	mileage: number
}

interface IOption {
	option_name: string
}

interface FiltersInitialState {
	brand: string,
	model: string,
	productionYear: number,
	body: string,
	start_mileage: number,
	end_mileage: number,
	start_price: number,
	end_price: number,
}