
import { Fragment } from 'react';

function ScrollEffect() {
    return (
        <Fragment>
            <div className='scrollEffect-section trigger'>
                <div className='container scrollEffect-conatiner'>
                    <div className='bouncing-ball'>
                        <div className='rotating-circle'></div>
                        <div className='rotating-shape one'></div>
                        <div className='rotating-shape two'></div>
                        <div className='rotating-shape three'></div>
                        <div className='rotating-shape four'></div>
                    </div>
                </div>
                <div className='flooting-bubbles-wrapper'>
                    <div className='bubble one'></div>
                    <div className='bubble two'></div>
                    <div className='bubble three'></div>
                    <div className='bubble four'></div>
                    <div className='bubble five'></div>
                    <div className='bubble six'></div>
                    <div className='bubble seven'></div>
                    <div className='bubble eight'></div>
                    <div className='bubble nine'></div>
                    <div className='bubble ten'></div>
                </div>
                <div className='container text'>
                    <h2 className='title'>Scroll animations enhance web design by creating engaging user experiences through dynamic effects triggered by scrolling.</h2>
                </div>
            </div>
        </Fragment>
    )
}


export default ScrollEffect;

