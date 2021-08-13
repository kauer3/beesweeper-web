import React, {useEffect, useState} from 'react';
import Row from '../../components/row/index';
import {GridContainer, Header, Counter} from './styles'
import bee from '../../assets/bee.png'

export default function Grid() {
  const [gameOver, setGameOver] = useState(false);
  const [victory, setVictory] = useState(false);
  const [grid, setGrid] = useState([]);
  const [flagCounter, setFlagCounter] = useState(0);
  const [bees, setBees] = useState(0);

  const config = {
    mines: 10,
    rows: 9,
    cols: 15
  }

  const createGrid = () => {
    console.log("creating grid!")
    const arr = [];
    for (let row = 0; row < config.rows; row++) {
      const currentRow = [];
      for (let col = 0; col < config.cols; col++) {
        currentRow.push({row: row, col: col, mine: false, display: false});
      }
      arr.push(currentRow);
    }

    let minesCounter = config.mines;
    while (minesCounter > 0) {
      let x = Math.floor(Math.random() * config.rows);
      let y = Math.floor(Math.random() * config.cols);

      if (!arr[x][y].mine) {
        arr[x][y].mine = true;
        minesCounter--;
      }
    }

    arr.forEach(row => {
      row.forEach(cell => {
        if (!cell.mine) {
          let nearBombs = 0;

          for (let i = -1; i < 2; i++) {
            if (cell.row + i > -1 && cell.row + i < config.rows) {
              const range = i === 0 ? {start: -1, end: 2} :
                cell.row % 2 === 0 ? {start: 0, end: 2} :
                  {start: -1, end: 1};
              for (let l = range.start; l < range.end; l++) {
                if (cell.col + l > -1 && cell.col + l < config.cols) {
                  if (arr[cell.row + i][cell.col + l].mine) {
                    nearBombs++;
                  }
                }
              }
            }
            arr[cell.row][cell.col].nearBombs = nearBombs;
          }
        }
      });
    })
    setGrid(arr);
  }

  const getEmptyCells = (cell) => {
    for (let i = -1; i < 2; i++) {
      if (cell.row + i > -1 && cell.row + i < config.rows) {
        const range = i === 0 ? {start: -1, end: 2} :
          cell.row % 2 === 0 ? {start: 0, end: 2} :
            {start: -1, end: 1};
        for (let l = range.start; l < range.end; l++) {
          if (cell.col + l > -1 && cell.col + l < config.cols && (i !== 0 || l !== 0)) {
            let gridUpdate = grid;
            gridUpdate[cell.row + i][cell.col + l].display = true;
            setGrid(gridUpdate => [...gridUpdate]);
          }
        }
      }
    }
  }

  const count = (add) => {
    if (add) {
      setFlagCounter(count => count + 1);
    } else {
      setFlagCounter(count => count - 1);
    }
  }

  const restart = () => {
    // createGrid(10);
    setFlagCounter(0);
    setGameOver(false);
    console.log('restart');
  }

  const display = (cell) => {
    let gridUpdate = grid;
    gridUpdate[cell.row][cell.col].display = true;
    setGrid(gridUpdate => [...gridUpdate]);
  }

  useEffect(() => {
    if (!gameOver) {
      createGrid();
    }
  }, [gameOver]);

  useEffect(() => {
    setBees(config.mines - flagCounter);
  }, [flagCounter, config]);

  useEffect(() => {
    console.log(`Bees: ${config.mines - flagCounter}`);
    if (config.mines - flagCounter === 0) {
      let counter = 0;
      grid.forEach(row => {
        row.forEach(cell => {
          if (cell.display) {
            counter++;
          }
        })
      })
      if (counter === config.rows * config.cols - config.mines) {
        console.log("YOU WON THE GAME!");
        alert("You won!!!");
        setVictory(true);
        setGameOver(true);
      }
    }
  }, [flagCounter, config, grid]);

  return (
    <>
      <Header>
        <Counter>
          {victory ? "You won!" :
            bees}
          {!victory &&
            <img src={bee} alt="bees" />}
        </Counter>
        <button>Restart</button>
      </Header>
      <GridContainer>
        {grid.length > 0 &&
          grid.map((cells, index) => {
            return <Row
              restart={restart}
              setGameOver={() => setGameOver(true)}
              count={(type) => count(type)}
              display={(cell) => display(cell)}
              gameOver={gameOver}
              row={cells}
              key={index}
              getEmptyCells={(cell) => getEmptyCells(cell)}
            />
          })}
      </GridContainer>
    </>
  );
}
