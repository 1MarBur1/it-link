import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { updateCars } from "@/storage/reducers/CarsReducer";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.query;
	const response = await fetch('https://my-json-server.typicode.com/1marbur1/mock_api/cars');
	const data = await response.json();
    
	return {
	  props: { id: id, cars: data },
	}
};

const ShowCarPage = ( { id, cars }: { id: number, cars: ICar[] } ) => {
	const dispatch = useAppDispatch()
	const carsFromStorage = useAppSelector((state) => state.cars.cars)
	const data = carsFromStorage.length ? carsFromStorage.filter((item) => item.id == id)[0] : cars.filter((item) => item.id == id)[0]
	const router = useRouter()

	//useEffect(() => {
	//	dispatch(updateCars(cars))
	//}, [cars])

	const handleDeleteCar = () => {
		fetch(`https://my-json-server.typicode.com/1marbur1/mock_api/cars/${id}`, {
			method: "DELETE",
		})
		.then(() => {
			router.push('/')
		})
	}

	return (
		<div className="p-5">
			<div className="d-flex justify-content-between">
				<button onClick={() => router.push('/')} className="btn btn-light">
					Назад
				</button>

				<div>
					<button onClick={() => router.push(`/${id}/edit`)} className="btn btn-light">
						Изменить
					</button>
					<button onClick={handleDeleteCar} className="btn btn-light">
						Удалить
					</button>
				</div>
			</div>
			<h1 className="mt-4">
				{data.name}
			</h1>
			<h5>
				{`${data.price}`.split('').reverse().map((el, index) => index % 3 !== 2 ? el : `.${el}`).reverse().join('')}
				₽
			</h5>
			<div className="row">
				<div className="col">
					<h4 className="mt-5">
						Технические характеристики:
					</h4>
					<p>
						Бренд:
						{' '}
						{data.technical_characteristics?.brand}
					</p>
					<p>
						Модель: 
						{' '}
						{data.technical_characteristics?.model}
					</p>
					<p>
						Пробег: 
						{' '}
						{data.technical_characteristics?.mileage}
					</p>
					<p>
						Год производства: 
						{' '}
						{data.technical_characteristics?.productionYear}
					</p>
					<p>
						Кузов: 
						{' '}
						{data.technical_characteristics?.body}
					</p>

				</div>
				<div className="col">
					<h4 className="mt-5">
						Описание:
					</h4>
					<p>
						{data.description}
					</p>
					<h4>
						Дополнительно:
					</h4>
					<p>
						{data.options?.map((item) => item.option_name).join(', ')}
					</p>

					<h4>
						Контакты:
					</h4>
					{data.contacts}
				</div>
			</div>
		</div>
	)
}

export default ShowCarPage;
