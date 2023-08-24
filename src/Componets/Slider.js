import React from 'react'
import { GrStar } from "react-icons/gr";

export default function Slider() {
    return (
        <>

            <div id="carouselExampleCaptions" className="carousel slide upper-case" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={require('../img/asset 6.jpeg')} className="d-block w-100 img-slider" alt="..." />

                        <div class="carousel-caption d-none d-md-block ">
                            <p className='text-warning latter-space'>
                                <GrStar className='me-1'></GrStar><GrStar className='me-1'></GrStar><GrStar className='me-1'></GrStar><GrStar className='me-1'></GrStar><GrStar></GrStar>
                                </p>
                            <p className='cap1 c-1'>unique place to rest and enjoy</p>
                            <p className='cap-2 c-2'>Some representative placeholder content for the first slide.</p>
                            <p><button className='btn-slider btn-slide my-5'>ROOMS & SUITS</button></p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={require('../img/asset 1.jpeg')} className="d-block w-100 img-slider" alt="..." />

                        <div class="carousel-caption d-none d-md-block">
                            <p className='text-warning latter-space'>
                                <GrStar className='me-1'></GrStar><GrStar className='me-1'></GrStar><GrStar className='me-1'></GrStar><GrStar className='me-1'></GrStar><GrStar></GrStar>
                            </p>
                            <p className='cap1 c-1'>Luxury hotel & Best Resort</p>
                            <p className='cap-2 c-2'>Some representative placeholder content for the second slide.</p>
                            <p><button className='btn-slider btn-slide my-5'>ROOMS & SUITS</button></p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={require('../img/asset 3.jpeg')} className="d-block w-100 img-slider" alt="..." />

                        <div class="carousel-caption d-none d-md-block">
                            <p className='text-warning latter-space'>
                                <GrStar className='me-1'></GrStar><GrStar className='me-1'></GrStar><GrStar className='me-1'></GrStar><GrStar className='me-1'></GrStar><GrStar></GrStar>
                            </p>
                            <p className='cap1 c-1'>The ultimate luxury experience</p>
                            <p className='cap-2 c-2 '>Some representative placeholder content for the third slide.</p>
                            <p><button className='btn-slider btn-slide my-5'>ROOMS & SUITS</button></p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}
