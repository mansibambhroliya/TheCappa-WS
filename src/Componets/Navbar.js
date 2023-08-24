import React from 'react'
import { FiChevronDown } from "react-icons/fi";
// import { HiBars3 } from "react-icons/hi";
import { HiBars3 } from "react-icons/hi2";


export default function Navbar() {
    return (
        <>
            <div className="position-relative z-index upper-case">
                <nav className="navbar navbar-expand-lg nav_bg position-absolute position-fixed top-0 start-0 w-100 z-index">
                    <div className="container-fluid container">
                        <a className="navbar-brand" href="#">
                            <img src={require('../img/asset 0.png')} alt="" className='w-50' />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span><HiBars3 className='fs-2 text-white'></HiBars3></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-5 me-auto mb-2 mb-lg-0 font-white space-nav">
                                <li className="nav-item dropdown redius">
                                    <a className="nav-link active " href="#home" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Home <FiChevronDown className='nav-arrow'></FiChevronDown>
                                    </a>
                                    <ul className="dropdown-menu sub-black" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item " href="#">Home layout 1</a></li>
                                        <li><a className="dropdown-item " href="#">Home layout 2</a></li>
                                        <li><a className="dropdown-item" href="#">Parallex image 1</a></li>
                                        <li><a className="dropdown-item" href="#">Parallex image 2</a></li>
                                        <li><a className="dropdown-item" href="#">Slide show 1</a></li>
                                        <li><a className="dropdown-item" href="#">Slide show 2</a></li>
                                        <li><a className="dropdown-item" href="#">Video 1</a></li>
                                        <li><a className="dropdown-item" href="#">Video 2</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Rooms & Suites<FiChevronDown className='nav-arrow'></FiChevronDown>
                                    </a>
                                    <ul className="dropdown-menu sub-black" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="#">Room 1</a></li>
                                        <li><a className="dropdown-item" href="#">Room 1</a></li>
                                        <li><a className="dropdown-item" href="#">Room 1</a></li>
                                        <li><a className="dropdown-item" href="#">Room Details</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#restaurant">Restaurant</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#spa">SPA</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Pages<FiChevronDown className='nav-arrow'></FiChevronDown>
                                    </a>
                                    <ul className="dropdown-menu sub-black" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="#">Services</a></li>
                                        <li><a className="dropdown-item" href="#">Facilities</a></li>
                                        <li><a className="dropdown-item" href="#">Gallary</a></li>
                                        <li><a className="dropdown-item" href="#">Team</a></li>
                                        <li><a className="dropdown-item" href="#">Pricing</a></li>
                                        <li><a className="dropdown-item" href="#">Careers</a></li>
                                        <li><a className="dropdown-item" href="#">F.A.Q.s</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        News<FiChevronDown className='nav-arrow'></FiChevronDown>
                                    </a>
                                    <ul className="dropdown-menu sub-black" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="#">News 1</a></li>
                                        <li><a className="dropdown-item" href="#">News 2</a></li>
                                        <li><a className="dropdown-item" href="#">Post Page</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
