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
import DrawingSpace from './components/DrawingSpace.js';
import ChessBoard from './components/ChessBoard.js';
import { Fragment } from 'react';
import Bottom from './components/Bottom.js';

function App() {
  return (
    <Fragment>
      {/* <PreLoader></PreLoader> */}
      <div className='body-container'>
        <ProgressBar></ProgressBar>
        <IntroSection></IntroSection>
        <MouseEffect></MouseEffect>
        <Shapes></Shapes>
        <ChessBoard></ChessBoard>
        <Cards></Cards>
        <ScrollEffect></ScrollEffect>
        
        {/* <DrawingSpace></DrawingSpace> */}
        
        <Bottom></Bottom>
        {/* <HorizonalScreens></HorizonalScreens> */}
        {/* <TestSection></TestSection> */}

        
      </div>
      <div className='small-screen'>
          Please use large resolution screen for better experience
      </div>
    </Fragment>
    
  );
}

export default App;
