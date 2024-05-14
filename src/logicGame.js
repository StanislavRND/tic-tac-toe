export const checkWinners = (values, setIsWinner, setWinningCells) => {
  const winnerCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];
  for (let combination of winnerCombinations) {
    let [a, b, c] = combination;
    if (values[a] && values[a] === values[b] && values[b] === values[c]) {
      setIsWinner(true);
      setWinningCells(combination);
      return values[a];
    }
  }
  return null;
};

export const checkDraw = (values) => {
  return values.every((el) => el !== null);
};

export const resetGame = (setValues, setIsWinner, setIsDraw, setWinningCells) => {
  setValues(Array(9).fill(null));
  setIsWinner(false);
  setIsDraw(false);
  setWinningCells([]);
};
