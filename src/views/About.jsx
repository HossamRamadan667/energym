import Footer from "../Components/Footer";
import logo from "../logo.svg";
function About(props) {
	return (
		<>
			<section className="my-5 text-center ">
				<div className="container d-flex gap-5 flex-column justify-content-center align-items-center">
					<h2
						// conditional style
						style={
							!props.noFooter
								? {
										backgroundColor: "var(--primaryColor)",
										clipPath: "polygon(0 0, 100% 0%, 95% 100%, 5% 100%)",
										color: "var(--whiteColor)",
										minWidth: "25rem",
										padding: "1rem 0",
										margin: "7px 0px 0px 0px",
								  }
								: {}
						}
						className="sectionTitle text-center">
						About Energym
					</h2>

					<div className="aboutLogo">
						<img src={logo} alt="" />
					</div>

					<p className="mx-md-5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis
					</p>

					<button className="callToAction btn secondary-b">Read More</button>
				</div>
			</section>

			{!props.noFooter && <Footer />}
		</>
	);
}

export default About;
