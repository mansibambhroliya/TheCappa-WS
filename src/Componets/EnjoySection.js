import React from 'react'
import { GrStar } from "react-icons/gr";


export default function EnjoySection() {
    return (
        <>
            <div className="enjoy-color text-white container-fluid">
                <div className="row spacer d-flex">
                    <div className="col-md-6 contain pe-md-5">
                        <p className='text-warning latter-space'>
                            <GrStar className='me-1'></GrStar><GrStar className='me-1'></GrStar><GrStar className='me-1'></GrStar><GrStar className='me-1'></GrStar><GrStar></GrStar>
                        </p>
                        <p className='cappa-font upper-case letter-space cappa-font-color'>   The cappa Luxury hotel         </p>
                        <p className='enjoy-font-size time-family letter-space'>   Enjoy a Luxury Experience      </p>
                        <p>
                            Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane.
                        </p>
                        <p>
                            Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine.
                        </p>
                    </div>
                    <div className="col col-md-3 animate-box fadeInUp animated " data-animate-effect="fadeInUp">
                        <img src={require('../img/asset 1.jpeg')} className='mt-90 mb-30 img-1'  />
                    </div>
                    <div className='col col-md-3 animate-box fadeInUp animated'  data-animate-effect="fadeInUp">
                        <img src={require('../img/asset 2.jpeg')} className='img-1' />

                    </div>
                </div>
            </div>
        </>
    )
}
