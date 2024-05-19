import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import IntroSection from './components/IntroSection';
import '../src/animations/animations.js';
import Shapes from './components/Shapes.js';
import TestSection from './components/TestSection.js';
import ProgressBar from './components/ProgressBar.js';
import ScrollEffect from './components/ScrollEffect.js';
import MouseEffect from './components/MouseEffect.js';
import Cards from './components/Cards.js';
import HorizonalScreens from './components/HorizonalScreens.js';
import PreLoader from './components/PreLoader.js';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      {/* <PreLoader></PreLoader> */}
      <div className='body-container'>
        <ProgressBar></ProgressBar>
        <IntroSection></IntroSection>
        <MouseEffect></MouseEffect>
        <Cards></Cards>
        <Shapes></Shapes>
        <ScrollEffect></ScrollEffect>
        {/* <HorizonalScreens></HorizonalScreens> */}
        {/* <TestSection></TestSection> */}
        
      </div>
    </Fragment>
    
  );
}

export default App;
