import { Fragment } from 'react';
import React from "react";
import Slider from "react-slick";
import arrowImage from '../images/right-arrow.png';
 
function Cards(){
    var sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
      };
    return(
        <Fragment>
            <div className='cards-section trigger'>
                <div className='container cards-container'>
                    <div className='title'>
                        Elements like card sliders boost visual appeal and offer versatility.
                    </div>
                    
                    <div className='row'>
                    <Slider {...sliderSettings}>
                        <div className='col-3'>
                            <div className='card-wrapper'>
                                <div className='card'>
                                    <div className='picture'>

                                    </div>
                                    <div className='headline'>
                                    Utilization
                                    </div>
                                    <div className='description'>
                                    Efficiently utilize space while showcasing multiple pieces of content.
                                    </div>
                                    <div className='btn-wrapper'>
                                        <button className='btn'>View</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='card-wrapper'>
                                <div className='card'>
                                    <div className='picture'>

                                    </div>
                                    <div className='headline'>
                                    Attractive
                                    </div>
                                    <div className='description'>
                                    Enhance visual appeal, making websites more engaging and attractive.                                    </div>
                                    <div className='btn-wrapper'>
                                        <button className='btn'>View</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='card-wrapper'>
                                <div className='card'>
                                    <div className='picture'>

                                    </div>
                                    <div className='headline'>
                                    Navigate
                                    </div>
                                    <div className='description'>
                                    Organize information effectively, allowing users to navigate through content easily.                                    </div>
                                    <div className='btn-wrapper'>
                                        <button className='btn'>View</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='card-wrapper'>
                                <div className='card'>
                                    <div className='picture'>

                                    </div>
                                    <div className='headline'>
                                    Attention
                                    </div>
                                    <div className='description'>
                                    Highlight featured or promotional content effectively, drawing users' attention to key messages or products.                                    </div>
                                    <div className='btn-wrapper'>
                                        <button className='btn'>View</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                        {/* <div className='slider-arrows'>
                            <div className='arrow left'>
                                <img src={arrowImage}/>
                            </div>
                            <div className='arrow right'>
                                <img src={arrowImage}/>
                            </div>
                        </div> */}
                        
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Cards;