import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { checkDraw, checkWinners, resetGame } from './../logicGame';

const Board = ({ isPlayingWithBot }) => {
  const [values, setValues] = useState(() => Array(9).fill(null));
  const [isNextX, setIsNextX] = useState(true);
  const [isWinner, setIsWinner] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [winner, setWinner] = useState('');
  const [winningCells, setWinningCells] = useState([]);

  const changeBoard = (i) => {
    if (!isWinner && values[i] === null) {
      const newValues = values.slice();
      newValues[i] = isNextX ? 'x' : 'o';
      setValues(newValues);
			setIsNextX(!isNextX);
    } 	
  };
  const makeBotMove = () => {
    if (!isNextX && isPlayingWithBot && !isWinner) {
      const availableMoves = values.reduce((acc, value, index) => {
        if (value === null) {
          acc.push(index);
        }
        return acc;
      }, []);
      const randomIndex = Math.floor(Math.random() * availableMoves.length);
      return availableMoves[randomIndex];
    }
    return null;
  };
	
  useEffect(() => {
    const winner = checkWinners(values, setIsWinner, setWinningCells);
    const draw = checkDraw(values);

    if (winner) {
      setWinner(winner);
    } else if (draw) {
      setIsDraw(true);
    }

    if (winner || draw) {
      setTimeout(() => {
        resetGame(setValues, setIsWinner, setIsDraw, setWinningCells);
      }, 2000);
    }

    if (!isNextX && isPlayingWithBot && !isWinner && !winner) {
      setTimeout(() => {
        const botMoveIndex = makeBotMove();
        const newValues = values.slice();
        newValues[botMoveIndex] = 'o';
        setValues(newValues);
        setIsNextX(true);
      }, 500);
    }
  }, [values, isNextX]);

	let playerMove = isNextX ? <div className="x"></div> : <div className="o"></div>;
	let infoWinner = winner === 'x' ? <div className="x"></div> : <div className="o"></div>;

  return (
    <>
      <Link to={'/home'}>
        <div className="back__home">Главная</div>
      </Link>
      <div className="play-friend">
        <div className="play-friend__move">
          {isDraw ? 'Ничья' : !isWinner ? 'Ваш ход' : 'Выиграл'}
          {isDraw ? '' : isWinner ? infoWinner : playerMove}
        </div>
        <div className="play-friend__board">
          {values.map((value, index) => (
            <div
              onClick={() => changeBoard(index)}
              key={index}
              className={`cell ${value ? 'cell-' + value : ''} ${
                winningCells.includes(index) ? 'winning-cell' : ''
              }`}></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Board;
