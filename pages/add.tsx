import CarForm from "@/components/CarForm";
import { useAppDispatch } from "@/hooks/redux";
import { addCar, updateCars } from "@/storage/reducers/CarsReducer";
import { useRouter } from "next/router";

const AddCarPage = () => {
	const dispatch = useAppDispatch()
	const router = useRouter()
	
	const createCar = (data: ICar) => {
		fetch("https://my-json-server.typicode.com/1marbur1/mock_api/cars", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		});

		router.push('/')
		dispatch(addCar(data))
	}
	return (
		<div className="p-5">
			<button onClick={() => router.push('/')} className="mx-4 btn btn-light">
				Назад
			</button>
			<h2 className="mx-4">
				Добавить машину
			</h2>
			<CarForm onSubmit={(data) => createCar(data)} />
		</div>
	)
}

export default AddCarPage;
