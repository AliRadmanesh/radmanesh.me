import { Hero } from "./components/hero";
import Images from "./components/images";

const Home = () => {
	return (
		<main className="flex flex-col">
			<Hero />
			<Images />
		</main>
	);
};

export { Home };
