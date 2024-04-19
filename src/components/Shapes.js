import { Fragment } from 'react';
 
function Shapes(){

    let alphabets = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z' ];

    
    return(
        <Fragment>
            <div className='shapes-section'>
                <div className='container shapes-conatiner'>
                    <div className="cube-wrapper">
                        <div className='cube'>M</div>
                        <div className='cube'>Y</div>
                        <div className='cube'>N</div>
                        <div className='cube'>A</div>
                        <div className='cube'>M</div>
                        <div className='cube'>E</div>
                        <div className='cube'>I</div>
                        <div className='cube'>S</div>
                        <div className='cube'>B</div>
                        <div className='cube'>O</div>
                        <div className='cube'>N</div>
                        <div className='cube'>D</div>
                        James 
                        <div className='cube'>B</div>
                        <div className='cube'>O</div>
                        <div className='cube'>N</div>
                        <div className='cube'>D</div>
                    
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Shapes;