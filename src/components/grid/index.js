import React, {useEffect, useState, useMemo} from 'react';
import Cell from '../../components/cell/index';
import {GridContainer, Header, Counter} from './styles'
import bee from '../../assets/bee2.png'

export default function Grid() {
  const [gameOver, setGameOver] = useState(false);
  const [victory, setVictory] = useState(false);
  const [grid, setGrid] = useState([]);
  const [revealed, setRevealed] = useState(0); // TODO fix revealed count and update victory formula
  const [flagCounter, setFlagCounter] = useState(0);
  const [minesFlagged, setMinesFlagged] = useState(0);
  const [bees, setBees] = useState(0);
  const [config, setConfig] = useState({mines: 5, rows: 10, cols: 10});

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
    // let revealed = 0
    for (let i = -1; i < 2; i++) {
      if (cell.row + i > -1 && cell.row + i < config.rows) {
        const range = i === 0 ? {start: -1, end: 2} :
          cell.row % 2 === 0 ? {start: 0, end: 2} :
            {start: -1, end: 1};
        for (let l = range.start; l < range.end; l++) {
          if (cell.col + l > -1 && cell.col + l < config.cols && (i !== 0 || l !== 0)) {
            if (!grid[cell.row + i][cell.col + l].display) {
              let gridUpdate = grid;
              gridUpdate[cell.row + i][cell.col + l].display = true;
              setGrid(gridUpdate => [...gridUpdate]);
              // revealed++
              // setRevealed(count => count + 1);
            }
            // console.log(gridUpdate[cell.row + i][cell.col + l].row, gridUpdate[cell.row + i][cell.col + l].col);
          }
        }
      }
    }
  }

  const countFlags = (add) => {
    if (add) {
      setFlagCounter(count => count + 1);
    } else {
      setFlagCounter(count => count - 1);
    }
  }

  const countMinesFlagged = (add) => {
    if (add) {
      setMinesFlagged(count => count + 1);
    } else {
      setMinesFlagged(count => count - 1);
    }
  }

  const restart = () => {
    if (victory) {
      setVictory(false);
    }
    setFlagCounter(0);
    setMinesFlagged(0);
    setRevealed(0);
    setGameOver(false);
  }

  // useEffect(() => {
  //   console.log(revealed);
  // }, [revealed]);

  useEffect(() => {
    if (!gameOver) {
      createGrid();
    }
  }, [gameOver]);

  useEffect(() => {
    setBees(config.mines - flagCounter);
  }, [flagCounter, config]);

  useEffect(() => {
    console.log(config.mines, minesFlagged)
    if (config.mines - minesFlagged === 0) {
      setVictory(true);
      setGameOver(true);
    }
  }, [config, minesFlagged]);

  return (
    <>
      <Header>
        <Counter victory={victory}>
          {victory ? "Victory!" : (
            <>
              {<div>{bees}</div>}
              <img src={bee} alt="bees" />
            </>)}
        </Counter>
        <button style={{width: `${gameOver ? "320" : "270"}px`}}>{gameOver ? "Restart" : "Reset"}</button>
      </Header>
      <GridContainer
        cols={config.cols}
        rows={config.rows}
      >
        {grid.length > 0 &&
          grid.map((row) => {
            return row.map((cell, index) => {
              return <Cell
                restart={restart}
                setGameOver={() => setGameOver(true)}
                countRevealed={() => setRevealed(count => count + 1)}
                countFlags={(type) => countFlags(type)}
                countMinesFlagged={(type) => countMinesFlagged(type)}
                gameOver={gameOver}
                cell={cell}
                victory={victory}
                key={index}
                getEmptyCells={(cell) => getEmptyCells(cell)}
              />
            })
          })}
      </GridContainer>
    </>
  );
}
