import { Fragment } from 'react';
 
function IntroSection(){
    return(
        <Fragment>
            <div className='intro-section trigger'>
                <div className='container intro-conatiner'>
                    <div className='text-container intro-text'></div>
                </div>
                <div className='backgroundCircle one odd'></div>
                <div className='backgroundCircle two even'></div>
                <div className='backgroundCircle three odd'></div>
                <div className='backgroundCircle four even'></div>
                <div className='backgroundCircle five odd'></div>
                <div className='scroll-indicatior'>Scroll down to see more!</div>
            </div>
        </Fragment>
    )
}

export default IntroSection;