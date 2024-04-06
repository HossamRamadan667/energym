function Footer() {
	return (
		<footer>
			<div className="container text-center py-5">
				<h2 className="mb-5">OUR NEWSLETTER</h2>

				<div className="row">
					<div className="col-6 col-md-3 text-start text-md-start gap-2  mb-4">
						<h4>About Energym</h4>

						<p className="me-3">
							consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
							aliqua. Ut enim ad minim veniam, quis nostrud exercitation u
						</p>
					</div>

					<div className=" col-6 col-md-3   mb-4">
						<div className="menus d-flex flex-column text-start text-md-start gap-2">
							<h4>Menus</h4>

							<a href="/">Home</a>
							<a href="/about">About</a>
							<a href="/services">Services</a>
							<a href="/contact">Contact</a>
						</div>
					</div>

					<div className="col-6 col-md-3  mb-4">
						<div className=" usefulLinks d-flex flex-column text-start text-md-start gap-2">
							<h4>Useful links</h4>

							<a href="/">Adipiscing</a>
							<a href="/about">Elit, sed</a>
							<a href="/services">do Eiusmod</a>
							<a href="/contact">Tempor</a>
						</div>
					</div>

					<div className="col-6 col-md-3  mb-4">
						<div className="d-flex flex-column text-start text-md-start gap-2">
							<h4>Contact us</h4>

							<div className="d-flex gap-2">
								<i class="fa-solid fa-location-dot  "></i>
								<p>helwan</p>
							</div>

							<div className="d-flex gap-2">
								<i class="fa-solid fa-phone  "></i>
								<p> 01148183794</p>
							</div>

							<div className="d-flex gap-2">
								<i class="fa-solid fa-envelope "></i>
								<p>email@Gmail.com</p>
							</div>

							<div className="d-flex gap-1  mt-3  mb-4 flex-wrap">
								<div className="mb-2 d-flex align-items-center">
									<a href="/">
										<span className="iconCircle">
											<i class="fa-brands fa-square-facebook fa-2x"></i>
										</span>
									</a>
								</div>

								<div className="mb-2 d-flex align-items-center">
									<a href="/">
										<span className="iconCircle">
											<i class="fa-brands fa-x-twitter fa-2x"></i>
										</span>
									</a>
								</div>

								<div className=" w-100 d-lg-none">{/* just spacer */}</div>

								<div className="mb-2 d-flex align-items-center">
									<a href="/">
										<span className="iconCircle">
											<i class="fa-brands fa-linkedin fa-2x"></i>
										</span>
									</a>
								</div>

								<div className="mb-2 d-flex align-items-center">
									<a href="/">
										<span className="iconCircle">
											<i class="fa-brands fa-instagram fa-2x"></i>
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
