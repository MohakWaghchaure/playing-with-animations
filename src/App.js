import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import IntroSection from './components/IntroSection';
import '../src/animations/animations.js';
import Shapes from './components/Shapes.js';
import ChessBoard from './components/ChessBoard.js';
import ProgressBar from './components/ProgressBar.js';
import TestSection from './components/TestSection.js';

function App() {
  return (
    <div className='body-container'>
      <ProgressBar></ProgressBar>
      <IntroSection></IntroSection>
      {/* <Shapes></Shapes> */}
      <TestSection></TestSection>
      {/* <ChessBoard></ChessBoard> */}
    </div>
  );
}

export default App;
