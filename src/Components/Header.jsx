import Navbar from "./Navbar";
import logo from '../logo.svg'

function Header() {
    return (
        <header>
            <div className="container py-3">
                <div className="row justify-content-center justify-content-md-start">

                    <div className="col-4 col-md-3 d-flex flex-row align-items-center">
                        <div className="logo me-2">
                            <img src={logo} alt="logo" />
                        </div>
                        <h5 className="mb-0">ENERGYM</h5>
                    </div>

                    <div className="row col-3 d-none d-md-flex">
                        <div className="d-flex align-items-center">
                            <i class="fa-solid fa-location-dot fa-2x"></i>
                            <p>helwan</p>
                        </div>
                    </div>
                    <div className="row col-3 d-none d-md-flex">
                        <div className="d-flex align-items-center">
                            <i class="fa-solid fa-phone fa-2x"></i>
                            <p>01148183794</p>
                        </div></div>
                    <div className="row col-3 d-none d-md-flex">
                        <div className="d-flex align-items-center">
                            <i class="fa-solid fa-envelope fa-2x"></i>
                            <p>email@Gmail.com</p>
                        </div></div>
                </div>
                <Navbar />
            </div>

        </header>);
}

export default Header;