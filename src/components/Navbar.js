import React from "react";
import logo1 from "../images/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#"><img className="logo1" src={logo1} alt="logo1..." /></a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">

                    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" aria-current="page" href="#">Home 
                            <span className="sr-only"></span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="https://www.linkedin.com/muhamadnurarifin/">About me</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/nurarifin05">Services</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">How Work</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/nurarifin05">portofolio</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="https://wa.me/6281336524010">contact</a>
                        </li>


                    </ul>


                </div>
            </div>
        </nav>

    )
}

export default Navbar;
