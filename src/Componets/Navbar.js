import React from 'react'
import { FiChevronDown } from "react-icons/fi";
// import { HiBars3 } from "react-icons/hi";
import { HiBars3 } from "react-icons/hi2";
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <>
            <div className="position-relative z-index upper-case">
                <nav className="navbar navbar-expand-lg nav_bg position-absolute position-fixed top-0 start-0 w-100 z-index">
                    <div className="container-fluid container">
                        <Link className="navbar-brand" href="#">
                            <img src={require('../img/asset 0.png')} alt="" className='w-50' />
                        </Link> 
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span><HiBars3 className='fs-2 text-white'></HiBars3></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-5 me-auto mb-2 mb-lg-0 font-white space-nav">
                                <li className="nav-item dropdown redius">
                                    <Link className="nav-link active " href="#home" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Home <FiChevronDown className='nav-arrow'></FiChevronDown>
                                    </Link> 
                                    <ul className="dropdown-menu sub-black" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" href="#">Home layout 1</Link> </li>
                                        <li><Link className="dropdown-item" href="#">Home layout 2</Link> </li>
                                        <li><Link className="dropdown-item" href="#">Parallex image 1</Link> </li>
                                        <li><Link className="dropdown-item" href="#">Parallex image 2</Link> </li>
                                        <li><Link className="dropdown-item" href="#">Slide show 1</Link> </li>
                                        <li><Link className="dropdown-item" href="#">Slide show 2</Link> </li>
                                        <li><Link className="dropdown-item" href="#">Video 1</Link> </li>
                                        <li><Link className="dropdown-item" href="#">Video 2</Link> </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#about">About</Link> 
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Rooms & Suites<FiChevronDown className='nav-arrow'></FiChevronDown>
                                    </Link> 
                                    <ul className="dropdown-menu sub-black" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" href="#">Room 1</Link> </li>
                                        <li><Link className="dropdown-item" href="#">Room 1</Link> </li>
                                        <li><Link className="dropdown-item" href="#">Room 1</Link> </li>
                                        <li><Link className="dropdown-item" href="#">Room Details</Link> </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#restaurant">Restaurant</Link> 
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#spa">SPA</Link> 
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Pages<FiChevronDown className='nav-arrow'></FiChevronDown>
                                    </Link> 
                                    <ul className="dropdown-menu sub-black" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" href="#">Services</Link> </li>
                                        <li><Link className="dropdown-item" href="#">Facilities</Link> </li>
                                        <li><Link className="dropdown-item" href="#">Gallary</Link> </li>
                                        <li><Link className="dropdown-item" href="#">Team</Link> </li>
                                        <li><Link className="dropdown-item" href="#">Pricing</Link> </li>
                                        <li><Link className="dropdown-item" href="#">Careers</Link> </li>
                                        <li><Link className="dropdown-item" href="#">F.A.Q.s</Link> </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        News<FiChevronDown className='nav-arrow'></FiChevronDown>
                                    </Link> 
                                    <ul className="dropdown-menu sub-black" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" href="#">News 1</Link> </li>
                                        <li><Link className="dropdown-item" href="#">News 2</Link> </li>
                                        <li><Link className="dropdown-item" href="#">Post Page</Link> </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" href="#contact">Contact</Link> 
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
