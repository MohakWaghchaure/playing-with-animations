import { Fragment } from 'react';
 
function ProgressBar(){
    return(
        <Fragment>
            <div className='Progressbar-section'>
                <div className='progressbar'>
                    <div className='progress-points'>
                        <div className='point'></div>
                        <div className='point'></div>
                        <div className='point'></div>
                        <div className='point'></div>
                        <div className='point'></div>
                        <div className='point'></div>
                        <div className='point'></div>
                        <div className='point'></div>
                    </div> 
                    <div className='bar'></div>
                </div>
                
            </div>
        </Fragment>
    )
}

export default ProgressBar;