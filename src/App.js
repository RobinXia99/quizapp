
import './App.css';
import { useEffect, useState } from 'react';
import Welcome from './Welcome/welcome';
import Game from './Game/game';
import Results from './Results/results';

function App() {

  const WELCOME = 'welcome', GAME = 'game', RESULT = 'result';
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [currentPage, setCurrentPage] = useState(WELCOME);
  const [points, setPoints] = useState(0);

  let pageContent = null;
  


  const addPlayer = (playerName) => {

    setCurrentPlayer(playerName);
    setCurrentPage(GAME);

  }

  const restartQuiz = () => {
    setPoints(0);
    setCurrentPage(WELCOME);
  }

  switch (currentPage) {
    case WELCOME:
      pageContent = <Welcome handleAdd={ addPlayer } ></Welcome>
      break;
    case GAME:
      pageContent = <Game answeredCorrectly={ () => setPoints(points + 1)} showResult={ () => setCurrentPage(RESULT)}></Game>
      break;
    default:
      pageContent = <Results score={ points } player={ currentPlayer } restartQuiz={ restartQuiz }></Results>
      break;
  }

  return (
    <div className="App">
      {pageContent}
    </div>
  );
}

export default App;
