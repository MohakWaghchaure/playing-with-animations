import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import IntroSection from './components/IntroSection';
import '../src/animations/animations.js';
import Shapes from './components/Shapes.js';
import ChessBoard from './components/ChessBoard.js';

function App() {
  return (
    <div className='body-container'>
      <IntroSection></IntroSection>
      <Shapes></Shapes>
      <ChessBoard></ChessBoard>
    </div>
  );
}

export default App;
