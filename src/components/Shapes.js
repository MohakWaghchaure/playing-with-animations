import { Fragment } from 'react';
 
function Shapes(){

    let alphabets = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z' ];

    
    return(
        <Fragment>
            <div className='shapes-section trigger'>
                <div className='container shapes-conatiner'>
                    <h2 className='title'>
                        Elements like draggable can be used to gamify the user experience by incorporating elements of playfulness and exploration.
                    </h2>
                    <div className="cube-wrapper">
                        <div className='movie-line'>
                            T _ _ &nbsp;N _ _ _ 'S &nbsp;B _ N _ &nbsp;J _ _ _ _ &nbsp;B _ _ _
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
                            {/* THE */}
                            <div className='cube'>H</div>
                            <div className='cube'>E</div>
                        </div>
                    </div>
                </div>
                {/* <div className='container trip-effect-container'>
                    <h2>Integrating shapes creatively into web design can significantly enhance the visual appeal and user experience of a website</h2>
                    <div className='trip-squares-wrapper'>
                        <div className='trip-square one'>
                            <div className='trip-square two'>
                                <div className='trip-square three'>
                                    <div className='trip-square four'>
                                        <div className='trip-square five'>
                                            <div className='trip-square six'>
                                                <div className='trip-square seven'>
                                                    <div className='trip-square eight'>
                                                        <div className='trip-square nine'>
                                                            <div className='trip-square ten'></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='trip-circle one'>
                            <div className='trip-circle two'>
                                <div className='trip-circle three'>
                                    <div className='trip-circle four'>
                                        <div className='trip-circle five'>
                                            <div className='trip-circle six'>
                                                <div className='trip-circle seven'>
                                                    <div className='trip-circle eight'>
                                                        <div className='trip-circle nine'>
                                                            <div className='trip-circle ten'></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </Fragment>
    )
}

export default Shapes;