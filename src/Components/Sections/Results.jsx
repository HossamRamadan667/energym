import results_img from "../../images/result-img.jpg";
function Results() {
	return (
		<section id="results">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 col-md-6 px-0 d-none d-md-block">
						<img src={results_img} alt="" className="resultImg" />
					</div>

					<div className="col-12 col-md-6 d-flex flex-column justify-content-center  align-items-start ps-4 py-5 py-md-0">
						<h2 className="sectionTitle">
							BUILT TO BRING <br />
							BEST RESULTS
						</h2>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit
						</p>

						<button className="btn primary align-self-start">Get A Quote</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Results;

