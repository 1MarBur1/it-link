import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Props } from "./CarForm.props";

const CarForm = ({ onSubmit, defaultValues }: Props) => {
	const [hasTech, setHasTech] = useState(false)
	const { register, handleSubmit,  } = useForm<ICar>({
		defaultValues: defaultValues
	});
	const [options, setOptions] = useState<string[]>([]);

	useEffect(() => {
		if (defaultValues?.options)
			setOptions(defaultValues?.options?.map((item) => item.option_name))
	}, [])

	return (
		<form 
			onSubmit={(handleSubmit((data) => onSubmit({
				...data,
				options: options.map((item) => {
					return {
						option_name: item,
					}
				})
			})))} 
			className="col p-5"
		>
			<label className="row mt-2">
				Название:
				<input placeholder="Название" className="form-control" {...register("name")} />
			</label>
			<label className="row mt-2">
				Описание:
				<input placeholder="Описание" className="form-control" {...register("description")} />
			</label>
			<label className="row mt-2">
				Цена:
				<input placeholder="Цена" className="form-control" {...register("price")} />
			</label>
			<label className="row mt-2">
				Контакты:
				<input placeholder="Контакты" className="form-control" {...register("contacts")} />
			</label>
		
			<button 
				type="button" 
				onClick={() => setHasTech((old) => !old)} 
				className={"btn my-3 row " + (hasTech ? "btn-primary" : "btn-secondary")}
			>
				Тех. характеристики
			</button>

			{hasTech && (
				<>
					<label className="row mt-2">
						Марка:
						<input placeholder="Марка" className="form-control" {...register("technical_characteristics.brand")} />
					</label>
					<label className="row mt-2">
						Модель:
						<input placeholder="Модель" className="form-control" {...register("technical_characteristics.model")} />
					</label>
					<label className="row mt-2">
						Год выпуска:
						<input placeholder="Год выпуска" className="form-control" {...register("technical_characteristics.productionYear")} />
					</label>
					<label className="row mt-2">
						Кузов:
						<input placeholder="Кузов" className="form-control" {...register("technical_characteristics.body")} />
					</label>
					<label className="row mt-2">
						Пробег:
						<input placeholder="Пробег" className="form-control" {...register("technical_characteristics.mileage")} />
					</label>
				</>
			)}
			<hr style={{ width: '90vw', marginLeft: '-24px' }} />

			<button 
				type="button" 
				onClick={() => setOptions((old) => old.concat(['']))} 
				className="mt-2 row btn btn-primary"
			>
				Добавить опции
			</button>

			{options.map((item, key) => (
				<input 
					key={key} 
					className="form-control mt-4 row" 
					placeholder="Название опции"
					onChange={(e) => {
						setOptions((old) => {
							const new_array = [...old]
							new_array[key] = e.target.value

							return new_array
						})
					}}
					value={item} />
			))}

			<hr style={{ width: '90vw', marginLeft: '-24px' }} />

			<button className="btn btn-primary row" type="submit">
				Сохранить
			</button>
		</form>
	);
};

export default CarForm;
