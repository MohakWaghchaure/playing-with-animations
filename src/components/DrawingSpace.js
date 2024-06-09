import { Fragment } from 'react';
 
function DrawingSpace(){

    return(
        <Fragment>
            <div className='drawing-space-section trigger'>
                <div className='drawing-container'>
                    <div className='canvas-wrapper'>
                        <canvas id='draw'></canvas>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default DrawingSpace;