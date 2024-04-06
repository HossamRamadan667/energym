import Footer from "../Components/Footer";

function Contact(props) {
	return (
		<>
			<section id="contact">
				<div className="container text-center py-5  ">
					<h2 className="sectionTitle mb-5">Get In Touch</h2>

					<div className="row">
						<div className="col-12 col-md-6 mb-3 mb-md-0">
							<form action="#" className="d-flex flex-column ">
								<input type="text" name="name" id="name" placeholder="Name" />

								<input type="email" name="email" id="email" placeholder="Email" />

								<input type="text" name="phone" id="phone" placeholder="Phone number" />

								<textarea
									name="message"
									id="message"
									cols="30"
									rows="10"
									placeholder="Message"></textarea>

								<input className="btn primary align-self-start" type="submit" value="send" />
							</form>
						</div>

						<div className="col-12 col-md-6">
							<iframe
								title="helwan"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110732.18326186754!2d31.39066933550662!3d29.853292067882492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458342722109f49%3A0x8164db4d10cac6c!2z2K3ZhNmI2KfZhtiMINit2YTZiNin2YYg2KfZhNio2YTYr9iMINmC2LPZhSDYrdmE2YjYp9mG2Iwg2YXYrdin2YHYuNipINin2YTZgtin2YfYsdip4oCs!5e0!3m2!1sar!2seg!4v1712262094684!5m2!1sar!2seg"
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"></iframe>
						</div>
					</div>
				</div>
			</section>
			{!props.noFooter && <Footer />}
		</>
	);
}

export default Contact;

