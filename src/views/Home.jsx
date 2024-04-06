import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Client from "../Components/Sections/Client";
import Features from "../Components/Sections/Features";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Results from "../Components/Sections/Results";

function Home() {
	return (
		<>
			<Hero />
			<About noFooter="true" />
			<Services noFooter="true" />
			<Features />
			<Client />
			<Results />
			<Contact noFooter="true" />
			<Footer />
		</>
	);
}

export default Home;

