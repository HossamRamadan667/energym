import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import c1 from "../../images/client.png";

const data = [
	{
		img: c1,
		name: "name",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
	},
	{
		img: c1,
		name: "name",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
	},
	{
		img: c1,
		name: "name",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
	},
];
const SliderContent = (props) => {
	return (
		<div className="sliderContent d-flex justify-content-center text-center mb-5">
			<div>
				<div className="clientAvatar rounded-circle overflow-hidden">
					<img src={props.img} alt="" />
				</div>

				<h5 className="sectionTitle">{props.name}</h5>

				<p className="px-5 pt-3">{props.description}</p>
			</div>
		</div>
	);
};

function CustomersCarousel() {
	return (
		<section id="client">
			<div className="container my-5">
				<Swiper
					modules={[Pagination, Autoplay]}
					slidesPerView={1}
					loop
					speed={1000}
					pagination={{ clickable: true }}
					initialSlide={1}
					autoplay={{
						pauseOnMouseEnter: true,
						delay: 5000,
					}}>
					{data.map((el, i) => (
						<SwiperSlide key={i}>
							<SliderContent img={el.img} name={el.name} description={el.description} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}

export default CustomersCarousel;

