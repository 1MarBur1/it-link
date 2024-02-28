import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { Props } from "./Filters.props"
import { updateFilters } from "@/storage/reducers/FiltersReducer";
import { ChangeEventHandler } from "react";

const Filters = ({ items }: Props) => {
	const dispatch = useAppDispatch()
	const { body, brand, end_mileage, end_price, model, productionYear, start_mileage, start_price } = useAppSelector((state) => state.filters)

	const handleChangeValue = (key: string, value: string|number) => {
		dispatch(
			updateFilters(
				{ 
					[key]: value 
				}
			)
		)
	}

	return (
		<div className="filters row">
			<div className="col">
				<h5>
					Бренд:
				</h5>
				<select 
					className="form-select" 
					onChange={(e) => handleChangeValue('brand', e.target.value)} 
					value={brand}
				>
					<option value=''>
						Любой
					</option>
					{items.map((item) => (
						<option key={item.id} value={item.technical_characteristics?.brand}>
							{item.technical_characteristics?.brand}
						</option>
					))}
				</select>
			</div>

			<div className="col">
				<h5>
					Модель:
				</h5>
				<select 
					className="form-select"
					onChange={(e) => handleChangeValue('model', e.target.value)} 
					value={model}
				>
					<option value=''>
						Любая
					</option>
					{items.map((item) => (
						<option key={item.id} value={item.technical_characteristics?.model}>
							{item.technical_characteristics?.model}
						</option>
					))}
				</select>
			</div>

			<div className="col">
				<h5>
					Год выпуска:
				</h5>
				<input 
					className="form-control" 
					onChange={(e) => handleChangeValue('productionYear', Number(e.target.value))} 
					value={productionYear}
					placeholder="Год выпуска" />
			</div>

			<div className="col">
				<h5>
					Тип кузова:
				</h5>
				<select 
					className="form-select"
					onChange={(e) => handleChangeValue('body', e.target.value)} 
					value={body}
				>
					<option value=''>
						Любой
					</option>
					{items.map((item) => (
						<option key={item.id} value={item.technical_characteristics?.body}>
							{item.technical_characteristics?.body}
						</option>
					))}
				</select>
			</div>

			<div className="col">
				<h5>
					Пробег:
				</h5>
				<div className="row">
					<h6 className="col">
						от
					</h6>
					<input 
						className="form-control col" 
						onChange={(e) => handleChangeValue('start_mileage', Number(e.target.value))} 
						value={start_mileage} />

					<h6 className="col">
						до
					</h6>
					<input 
						className="form-control col" 
						onChange={(e) => handleChangeValue('end_mileage', Number(e.target.value))} 
						value={end_mileage} />
				</div>
				<h5>
					Цена:
				</h5>
				<div className="row center">
					<h6 className="col">
						от
					</h6>
					<input 
						className="form-control col"
						onChange={(e) => handleChangeValue('start_price', Number(e.target.value))} 
						value={start_price} />

					<h6 className="col">
						до
					</h6>
					<input 
						className="form-control col" 
						onChange={(e) => handleChangeValue('end_price', Number(e.target.value))} 
						value={end_price} />
				</div>
			</div>
		</div>
	)
}

export default Filters;
