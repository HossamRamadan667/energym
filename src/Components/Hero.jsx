import HeroCarousel from "./Carousels/HeroCarousel";
import heroBg from "../images/slider-bg.jpg";

function Hero() {
	return (
		<section
			style={{ backgroundImage: `url(${heroBg})` }}
			id="hero"
			className="d-flex flex-column justify-content-center">
			<div className="container">
				<HeroCarousel />
			</div>
		</section>
	);
}

export default Hero;

