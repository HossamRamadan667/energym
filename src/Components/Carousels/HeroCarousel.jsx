import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
const SliderContent = (props) => {
	return (
		<div className="sliderContent d-flex justify-content-end text-white">
			<div>
				<h3>{props.data.PrimaryTitle}</h3>

				<h2>{props.data.title}</h2>

				<p className="mb-3">{props.data.description}</p>

				<div className="d-flex gap-2 callToAction ">
					<button className="btn primary" onClick={props.data.btn_1.onClick}>
						{props.data.btn_1.title}
					</button>

					<button className="btn secondary-w" onClick={props.data.btn_2.onClick}>
						{props.data.btn_2.title}
					</button>
				</div>
			</div>
		</div>
	);
};

const data = [
	{
		PrimaryTitle: "Get your body",

		title: "FITNESS HERE",

		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua.Ut enim ad minim veniam",

		btn_1: {
			title: "Read more",
			onClick: () => {},
		},

		btn_2: {
			title: "Get a quote",
			onClick: () => {},
		},
	},
	{
		PrimaryTitle: "Get your body",
		title: "FITNESS HERE",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua.Ut enim ad minim veniam",
		btn_1: {
			title: "Read more",
			onClick: () => {},
		},
		btn_2: {
			title: "Get a quote",
			onClick: () => {},
		},
	},
	{
		PrimaryTitle: "Get your body",
		title: "FITNESS HERE",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua.Ut enim ad minim veniam",
		btn_1: {
			title: "Read more",
			onClick: () => {},
		},
		btn_2: {
			title: "Get a quote",
			onClick: () => {},
		},
	},
];

function CarouselControllers() {
	const swiper = useSwiper();
	return (
		<div className="CarouselControllers d-flex   gap-2    flex-row-reverse  flex-md-column">
			<button className="btn primary" onClick={() => swiper.slideNext()}>
				<i class="fa-solid fa-caret-right fa-2x"></i>
			</button>

			<button className="btn primary" onClick={() => swiper.slidePrev()}>
				<i class="fa-solid fa-caret-left fa-2x"></i>
			</button>
		</div>
	);
}

function Carousel() {
	return (
		<Swiper
			modules={[Autoplay]}
			slidesPerView={1}
			pagination={{ clickable: true }}
			initialSlide={1}
			autoplay={{
				pauseOnMouseEnter: true,
				delay: 5000,
			}}>
			{data.map((el) => (
				<SwiperSlide>
					<SliderContent data={el} />
				</SwiperSlide>
			))}

			<CarouselControllers />
		</Swiper>
	);
}

export default Carousel;

