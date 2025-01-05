import { About, Hero, Images } from "./components";

const Home = () => {
	return (
		<main className="flex flex-col">
			<Hero />
			<Images />
			<About />
		</main>
	);
};

export { Home };
