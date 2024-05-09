import { Fragment } from 'react';
 
function Shapes(){

    let alphabets = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z' ];

    
    return(
        <Fragment>
            <div className='shapes-section'>
                <div className='container shapes-conatiner'>
                    <div className='title'>
                        Elements like draggable can be used to gamify the user experience by incorporating elements of playfulness and exploration.
                    </div>
                    <div className="cube-wrapper">
                        <div className='movie-line'>
                            M _ &nbsp;N _ _ _  &nbsp;IS &nbsp;B _ N _ &nbsp;  J _ _ _ _ &nbsp; B _ _ _
                        </div>
                        <div className='hint-line'>(Drag cubes and guess the movie dialogue)</div>
                        <div className='cubes'>
                            {/* BOND */}
                            <div className='cube'>O</div>
                            <div className='cube'>D</div>
                            {/* JAMES */}
                            <div className='cube'>A</div>
                            <div className='cube'>M</div>
                            <div className='cube'>E</div>
                            <div className='cube'>S</div>
                            {/* NAME */}
                            <div className='cube'>A</div>
                            <div className='cube'>M</div>
                            <div className='cube'>E</div>
                            {/* BOND */}
                            <div className='cube'>O</div>
                            <div className='cube'>N</div>
                            <div className='cube'>D</div>
                            {/* My */}
                            <div className='cube'>Y</div>
                        </div>
                        
                    
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Shapes;