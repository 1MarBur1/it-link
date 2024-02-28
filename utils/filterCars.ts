export const filterCar = (car: ICar, filters: FiltersInitialState) => {
	if (
		!car.technical_characteristics?.body.includes(filters.body) ||
		!car.technical_characteristics?.brand.includes(filters.brand) ||
		!car.technical_characteristics?.model.includes(filters.model) ||
		(filters.productionYear && car.technical_characteristics?.productionYear !== filters.productionYear) ||
		filters.start_mileage > car.technical_characteristics?.mileage ||
		filters.end_mileage < car.technical_characteristics?.mileage ||
		filters.start_price > car.price ||
		filters.end_price < car.price
	) {
		return false
	}

	return true
}
