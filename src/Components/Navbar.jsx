import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light   justify-content-center  ">
            <button className="navbar-toggler mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa-solid fa-bars fa-2x"></i>
            </button>

            <div className="collapse navbar-collapse  justify-content-center mx-3 " id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item  ">
                        <NavLink className="nav-link" to="/">Home  </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/services">Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;