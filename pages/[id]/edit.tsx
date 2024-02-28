import CarForm from "@/components/CarForm";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { editCar } from "@/storage/reducers/CarsReducer";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.query;
    
	return {
	  props: { id: id },
	}
};


const EditCarPage = ({ id }: { id: number, cars: ICar[] } ) => {
	const dispatch = useAppDispatch()
	const cars = useAppSelector(state => state.cars.cars)
	const car = cars.filter((item) => item.id === Number(id))[0]
	const router = useRouter()
	
	const createCar = (data: ICar) => {
		fetch(`https://my-json-server.typicode.com/1marbur1/mock_api/cars/${id}`, {
			method: "PATCH",
			body: JSON.stringify(data),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		});

		router.push(`/${id}`)
		dispatch(editCar(data))
	}
	return (
		<div className="p-5">
			<button onClick={() => router.push('/')} className="mx-4 btn btn-light">
				Назад
			</button>
			<h2 className="mx-4">
				Изменить машину 
				{' '}
				{car.name}
			</h2>

			<CarForm 
				defaultValues={car}
				onSubmit={(data) => createCar(data)} />
		</div>
	)
}

export default EditCarPage;
