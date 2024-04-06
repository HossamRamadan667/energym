import Footer from "../Components/Footer";
import s1 from "../images/s-1.jpg";
import s2 from "../images/s-2.jpg";
import s3 from "../images/s-3.jpg";
import s4 from "../images/s-4.jpg";
import s5 from "../images/s-5.jpg";
import s6 from "../images/s-6.jpg";

const data = [
	{
		title: "CROSSFIT TRAINING",
		to: "#",
		img: s1,
	},
	{
		title: "FITNESS",
		to: "#",
		img: s2,
	},
	{
		title: "DYNAMIC STRENGTH TRAINING",
		to: "#",
		img: s3,
	},
	{
		title: "HEALTH",
		to: "#",
		img: s4,
	},
	{
		title: "WORKOUT",
		to: "#",
		img: s5,
	},
	{
		title: "STRATEGIES",
		to: "#",
		img: s6,
	},
];
function Service(props) {
	return (
		<div className="col-12 col-md-6 mb-4">
			<div className="service position-relative overflow-hidden">
				<img src={props.img} alt="" />

				<div className="hoverLayout position-absolute">
					<a className="d-flex flex-column align-items-center gap-2" href={props.to}>
						<div className="icon d-flex flex-column justify-content-center  rounded-circle">
							<i class="fa-solid fa-link fa-2x"></i>
						</div>

						<h5> {props.title} </h5>
					</a>
				</div>

				<h3 className="title position-absolute text-start  ">{props.title}</h3>
			</div>
		</div>
	);
}

function Services(props) {
	return (
		<>
			<section id="services">
				<div className="container text-center d-flex flex-column gap-5 my-5 align-items-center ">
					<h2
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
						Our Services
					</h2>
					<div className="services row">
						{data.map((el, i) => (
							<Service key={i} title={el.title} img={el.img} to={el.to} />
						))}
					</div>
				</div>
			</section>
			{!props.noFooter && <Footer />}
		</>
	);
}

export default Services;

