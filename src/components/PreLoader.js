
import { Fragment } from 'react';

function PreLoader() {
    return (
        <Fragment>
            <div className='preLoader-section'>
                <div className='container preLoader-conatiner'>
                    <div className='background-color'></div>
                    <div className='loader-wrapper'>
                        <div className='loading-text'>
                            <div className='letter'>W</div>
                            <div className='letter'>E</div>
                            <div className='letter'>L</div>
                            <div className='letter'>C</div>
                            <div className='letter'>O</div>
                            <div className='letter'>M</div>
                            <div className='letter'>E</div>
                            <div className='letter'>!</div>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default PreLoader;

