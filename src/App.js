import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import IntroSection from './components/IntroSection';
import '../src/animations/animations.js';
import Shapes from './components/Shapes.js';
import PreLoader from './components/PreLoader.js';
import ProgressBar from './components/ProgressBar.js';
import ScrollEffect from './components/ScrollEffect.js';
import MouseEffect from './components/MouseEffect.js';
import Cards from './components/Cards.js';
import Flow from './components/Flow.js';
import ChessBoard from './components/ChessBoard.js';
import Transform from './components/Transform.js';
import { Fragment } from 'react';
import Bottom from './components/Bottom.js';

function App() {
  return (
    <Fragment>
      <PreLoader></PreLoader>
      <div className='body-container'>
        <ProgressBar></ProgressBar>
        <IntroSection></IntroSection>
        <MouseEffect></MouseEffect>
        <Shapes></Shapes>
        <ChessBoard></ChessBoard>
        <Cards></Cards>
        <Flow></Flow>
        <Transform></Transform>
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
