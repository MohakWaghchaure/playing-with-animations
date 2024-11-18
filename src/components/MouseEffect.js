
import { Fragment } from 'react';

function MouseEffect() {
    return (
        <Fragment>
            <div className='mouseEffect-section trigger'>
                <div className='mouseEffect-wrapper'>
                    <div className='container mouseEffect-conatiner'>
                        <div className='text'>The mouse spotlight effect like this highlights elements, improving user experience, engagement, aesthetics, and providing feedback.</div>
                        <div className='instruction'>(Move your cursor around to see the effect)</div>
                    </div>
                </div>
                <div className='mouseEffect-overlay'>
                    <div className='container mouseEffect-conatiner'>
                        <div className='text'>The mouse spotlight effect like this highlights elements, improving user experience, engagement, aesthetics, and providing feedback.</div>
                        <div className='instruction'>(Move your cursor around to see the effect)</div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MouseEffect;

