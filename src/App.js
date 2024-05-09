import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import IntroSection from './components/IntroSection';
import '../src/animations/animations.js';
import Shapes from './components/Shapes.js';
import ChessBoard from './components/ChessBoard.js';
import ProgressBar from './components/ProgressBar.js';
import TestSection from './components/TestSection.js';
import Crossword from './components/Crossword.js';
import Cards from './components/Cards.js';

function App() {
  return (
    <div className='body-container'>
      <ProgressBar></ProgressBar>
      <IntroSection></IntroSection>
      <Cards></Cards>
      <Shapes></Shapes>
      {/* <Crossword></Crossword> */}
      
      {/* <TestSection></TestSection> */}
      {/* <ChessBoard></ChessBoard> */}
    </div>
  );
}

export default App;
