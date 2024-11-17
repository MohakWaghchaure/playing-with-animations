import { Fragment } from 'react';
import React from "react";
import Slider from "react-slick";
import Icon1 from '../images/beauty.png';
import Icon2 from '../images/brightness.png';
import Icon3 from '../images/gear.png';
import Icon4 from '../images/motion-graphic.png';
import Icon5 from '../images/paper-plane.png';
import Icon6 from '../images/play-button.png';
 
function Cards(){
    var sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
    return(
        <Fragment>
            <div className='cards-section trigger'>
                <div className='container cards-container'>
                    <div className='title'>
                        <h2>Elements like card sliders boost visual appeal and offer versatility.</h2>
                    </div>
                    
                    <div className='row'>
                    <Slider {...sliderSettings}>
                        <div className='col-3'>
                            <div className='card-wrapper'>
                                <div className='card'>
                                    <div className='picture'>
                                        <img src={Icon1}></img>
                                    </div>
                                    <div className='headline'>
                                    Utilization
                                    </div>
                                    <div className='description'>
                                    Efficiently utilize space while showcasing multiple pieces of content.
                                    </div>
                                    {/* <div className='btn-wrapper'>
                                        <button className='btn'>View</button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='card-wrapper'>
                                <div className='card'>
                                    <div className='picture'>
                                        <img src={Icon2}></img>
                                    </div>
                                    <div className='headline'>
                                    Attractive
                                    </div>
                                    <div className='description'>
                                    Enhance visual appeal, making websites more engaging and attractive.                                    </div>
                                    {/* <div className='btn-wrapper'>
                                        <button className='btn'>View</button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='card-wrapper'>
                                <div className='card'>
                                    <div className='picture'>
                                        <img src={Icon3}></img>
                                    </div>
                                    <div className='headline'>
                                    Navigate
                                    </div>
                                    <div className='description'>
                                    Organize information effectively, allowing users to navigate through content easily.                                    </div>
                                    {/* <div className='btn-wrapper'>
                                        <button className='btn'>View</button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='card-wrapper'>
                                <div className='card'>
                                    <div className='picture'>
                                        <img src={Icon4}></img>
                                    </div>
                                    <div className='headline'>
                                    Attention
                                    </div>
                                    <div className='description'>
                                    Highlight featured or promotional content effectively, drawing users' attention to key messages or products.                                    </div>
                                    {/* <div className='btn-wrapper'>
                                        <button className='btn'>View</button>
                                    </div> */}
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