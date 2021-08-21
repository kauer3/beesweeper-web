import React, {useEffect, useState, useMemo} from 'react';
import Drawer from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Cell from '../../components/cell/index';
import {GridContainer, Header, Counter} from './styles'
import bee from '../../assets/bee2.png'
import gear from '../../assets/gear.png'

export default function Grid() {
  const [gameOver, setGameOver] = useState(false);
  const [victory, setVictory] = useState(false);
  const [grid, setGrid] = useState([]);
  const [revealed, setRevealed] = useState(0); // TODO fix revealed count and update victory formula
  const [flagCounter, setFlagCounter] = useState(0);
  const [minesFlagged, setMinesFlagged] = useState(0);
  const [bees, setBees] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [config, setConfig] = useState({mines: 20, rows: 10, cols: 20});
  const [configEditing, setConfigEditing] = useState(config);

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
            }
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
    if (gameOver) {
      setGameOver(false);
    } else {
      // setGameOver(true);
      // createGrid();
      setGameOver("reset");
    }
  }

  // useEffect(() => {
  //   if (gameOver) setGameOver(false)
  // }, [grid]);

  useEffect(() => {
    console.log(revealed);
  }, [revealed]);

  useEffect(() => {
    if (!gameOver) {
      createGrid();
    } else if (gameOver === "reset") {
      setGameOver(false);
    }
  }, [gameOver]);

  useEffect(() => {
    setBees(config.mines - flagCounter);
  }, [flagCounter, config]);

  useEffect(() => {
    createGrid();
  }, [config]);

  useEffect(() => {
    console.log(config.mines - minesFlagged === 0 && config.rows * config.cols - config.mines === revealed);
    if (config.mines - minesFlagged === 0 && config.rows * config.cols - config.mines === revealed) {
      setVictory(true);
      setGameOver(true);
    }
  }, [config, minesFlagged, revealed]);

  return (
    <>
      <Drawer anchor="top" open={drawerOpen} onClose={() => console.log(configEditing)} style={{ padding: '50px'}}>
        <form>
          <TextField id="rows" label="Rows" variant="outlined" value={configEditing.rows} onChange={(e) => setConfigEditing({...configEditing, rows: e.target.value})} />
          <TextField id="cols" label="Columns" variant="outlined" value={configEditing.cols} onChange={(e) => setConfigEditing({...configEditing, cols: e.target.value})} />
          <TextField id="bees" label="Bees" variant="outlined" value={configEditing.mines} onChange={(e) => setConfigEditing({...configEditing, mines: e.target.value})} />
          <Button type="submit" onClick={() => {
            if (configEditing.mines < configEditing.rows * configEditing.cols) {
            setDrawerOpen(false);
            setConfig(configEditing);
            } else {
              alert("There is no space for that many bees!");
            }
          }}>Apply</Button>
        </form>
      </Drawer>
      <Header>
        <button onClick={() => {
          setDrawerOpen(true);
        }} style={{width: '320px'}}>Configure</button>
        <image src={bee} alt="configure" style={{ height: '100px', width: '100px' }} />
        <Counter victory={victory}>
          {gameOver && gameOver !== "reset" ? (victory ? "Victory!" : "You lost") : (
            <>
              {<div>{bees}</div>}
              <img src={bee} alt="bees" />
            </>)}
        </Counter>
        <button onClick={() => {
          restart();
        }} style={{width: '320px'}}>Restart</button>
      </Header>
      <GridContainer
        cols={config.cols}
        rows={config.rows}
      >
        {grid.length > 0 &&
          grid.map((row) => {
            return row.map((cell, index) => {
              return <Cell
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
