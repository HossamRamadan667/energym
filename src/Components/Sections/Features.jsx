import f1 from "../../images/u-1.png";
import f2 from "../../images/u-2.png";
import f3 from "../../images/u-3.png";
import f4 from "../../images/u-4.png";

const data = [
	{
		icon: f1,
		title: "QUALITY EQUIPMENT",
		description: "ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
	},
	{
		icon: f2,
		title: "HEALTHY NUTRITION PLAN",
		description: "ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
	},
	{
		icon: f3,
		title: "SHOWER SERVICE",
		description: "ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
	},
	{
		icon: f4,
		title: "UNIQUE TO YOUR NEEDS",
		description: "ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
	},
];

function Feature(props) {
	return (
		<div className=" feature col-12 col-md-3 mb-5">
			<div className="icon mb-3 d-flex flex-column align-items-center justify-content-center">
				<img src={props.icon} alt="" />
			</div>

			<h5>{props.title}</h5>

			<p>{props.description}</p>
		</div>
	);
}

function Features() {
	return (
		<section id="features">
			<div className="container text-center py-5 d-flex gap-5 flex-column text-white">
				<h2 className="sectionTitle">Why Choose Us</h2>

				<div className="row">
					{data.map((el, i) => (
						<Feature key={i} title={el.title} icon={el.icon} description={el.description} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Features;
