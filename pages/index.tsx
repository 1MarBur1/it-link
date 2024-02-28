import Card from "@/components/Card";
import Filters from "@/components/Filters";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { updateCars } from "@/storage/reducers/CarsReducer";
import { filterCar } from "@/utils/filterCars";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const getStaticProps = async () => {
	const response = await fetch('https://my-json-server.typicode.com/1marbur1/mock_api/cars');
	const data = await response.json();

	return {
		props: { items: data },
		revalidate: 60,
	}
};

const SearchPage = ({ items }: { items: ICar[] }) => { 
	const dispatch = useAppDispatch()
	const cars = useAppSelector(state => state.cars.cars)
	const filters = useAppSelector(state => state.filters)
	const router = useRouter()

	useEffect(() => {
		if (!cars.length && items.length)
			dispatch(updateCars(items))
	}, [items])

	return (
		<div style={{ padding: '20px' }}>
			<Filters items={cars} />

			<button className="btn btn-primary mt-2" onClick={() => router.push('/add')}>
				Добавить машину
			</button>

			<div className="col mt-5" >
				{cars?.filter((item) => filterCar(item, filters)).map((item) => (
					<Card key={item.id} className="row">
						<h3>
							<Link href={`/${item.id}`}>{item.name}</Link>
						</h3>
					</Card>
				))}
			</div>
		</div>
	);
};

export default SearchPage;