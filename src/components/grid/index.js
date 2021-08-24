import React, {useEffect, useState, useMemo} from 'react';
import Drawer from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Cell from '../../components/cell/index';
import {GridContainer, Header, Counter, Config, Icon} from './styles'
import bee from '../../assets/bee2.png'
import gear from '../../assets/gear.svg'
import confirm from '../../assets/confirm.svg'
import cancel from '../../assets/cancel.svg'

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

  // const handleInputChange = (input, e) => {
  //   if ((/[^0-9]/).test(e.nativeEvent.data) && e.nativeEvent.data !== null) {
  //     e.preventDefault();
  //   } else {
  //     setConfigEditing({...configEditing, cols: e.target.value.replace(/[^0-9]+/g,"")})
  //   }
  // }

  // const handleInputBlur = (input) => {
  //   if (configEditing.cols.slice(0, 1) === '0') {
  //     let cols = configEditing.cols;
  //     while (cols.slice(0, 1) === '0') {
  //       cols = cols.slice(1);
  //     }
  //     setConfigEditing({...configEditing, cols: cols});
  //   }
  //   if (configEditing.cols < 1) {
  //     setConfigEditing({...configEditing, cols: 1});
  //   } else if (configEditing.cols % 1 !== 0) {
  //     setConfigEditing({...configEditing, cols: Math.round(configEditing.cols)});
  //   }
  // }


  // useEffect(() => {
  //   if (gameOver) setGameOver(false)
  // }, [grid]);

  // useEffect(() => {
  //   // let regex = (/[^0-9]+/g);
  //   console.log(configEditing.rows);
  //   console.log((/[^0-9]+/g).test(configEditing.rows.toString().slice(-1))) 
  //   // console.log(parseInt(configEditing.rows.toString().match( /\d+/g ))) 
  // }, [configEditing.rows]);

  // useEffect(() => {
  //   console.log(revealed);
  // }, [revealed]);

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

  // useEffect(() => {
  //   createGrid();
  // }, [config]);

  useEffect(() => {
    // console.log(config.mines - minesFlagged === 0 && config.rows * config.cols - config.mines === revealed);
    if (config.mines - minesFlagged === 0 && config.rows * config.cols - config.mines === revealed) {
      setVictory(true);
      setGameOver(true);
    }
  }, [config, minesFlagged, revealed]);

  return (
    <>
      <Drawer anchor="top" open={drawerOpen} onClose={() => {
        setDrawerOpen(false)
        setConfigEditing({...config});
      }}>
        <form style={{display: 'inline-flex', gap: '20px', justifyContent: 'center'}}>
          <TextField
            id="rows"
            type="number"
            inputProps={{min: "1", step: "1", autoComplete: "off", onKeyPress: (e) => {if (e.key === ',') e.preventDefault()}}}
            label="Rows"
            variant="outlined"
            value={configEditing.rows}
            error={configEditing.rows < 1 || configEditing.rows % 1 !== 0}
            onChange={(e) => {
              if (e.nativeEvent.data && (/[^0-9]/).test(e.nativeEvent.data) && e.nativeEvent.data !== null) {
                e.preventDefault();
              } else {
                setConfigEditing({...configEditing, rows: e.target.value.replace(/[^0-9]+/g,"")})
              }
            }}
            onBlur={() => {
              if (configEditing.rows.toString().slice(0, 1) === '0') {
                let rows = configEditing.rows;
                while (rows.slice(0, 1) === '0') {
                  rows = rows.slice(1);
                }
                setConfigEditing({...configEditing, rows: rows});
              }
              if (configEditing.rows < 1) {
                setConfigEditing({...configEditing, rows: 1});
              } else if (configEditing.rows % 1 !== 0) {
                setConfigEditing({...configEditing, rows: Math.round(configEditing.rows)});
              }
            }}
          />
          <TextField
            id="cols"
            type="number"
            inputProps={{min: "1", step: "1", autoComplete: "off", onKeyPress: (e) => {if (e.key === ',') e.preventDefault()}}}
            label="Columns"
            variant="outlined"
            value={configEditing.cols}
            error={configEditing.cols < 1 || configEditing.cols % 1 !== 0}
            onChange={(e) => {
              if (e.nativeEvent.data && (/[^0-9]/).test(e.nativeEvent.data) && e.nativeEvent.data !== null) {
                e.preventDefault();
              } else {
                setConfigEditing({...configEditing, cols: e.target.value.replace(/[^0-9]+/g,"")})
              }
            }}
            onBlur={() => {

              if (configEditing.cols.toString().slice(0, 1) === '0') {
                let cols = configEditing.cols;
                while (cols.slice(0, 1) === '0') {
                  cols = cols.slice(1);
                }
                setConfigEditing({...configEditing, cols: cols});
              }
              if (configEditing.cols < 1) {
                setConfigEditing({...configEditing, cols: 1});
              } else if (configEditing.cols % 1 !== 0) {
                setConfigEditing({...configEditing, cols: Math.round(configEditing.cols)});
              }
            }}
          />
          <TextField
            id="bees"
            type="number"
            inputProps={{min: "1", max: configEditing.rows * configEditing.cols - 1, step: "1", autoComplete: "off", onKeyPress: (e) => {if (e.key === ',') e.preventDefault()}}}
            label="Bees"
            variant="outlined"
            value={configEditing.mines}
            error={configEditing.mines < 1 || configEditing.mines >= configEditing.rows * configEditing.cols}
            onChange={(e) => {
              if (e.nativeEvent.data && (/[^0-9]/).test(e.nativeEvent.data) && e.nativeEvent.data !== null) {
                e.preventDefault();
              } else {
                setConfigEditing({...configEditing, mines: e.target.value.replace(/[^0-9]+/g,"")})
              }
            }}
            onBlur={() => {
              let regex = /\d/g;
              console.log(regex.test(configEditing.mines));
              console.log(configEditing.mines);
              if (configEditing.mines < 1 || configEditing.mines === "") {
                setConfigEditing({...configEditing, mines: 1});
              } else if (configEditing.mines >= configEditing.rows * configEditing.cols) {
                setConfigEditing({...configEditing, mines: configEditing.rows * configEditing.cols - 1});
              } else if (configEditing.mines % 1 !== 0) {
                setConfigEditing({...configEditing, mines: Math.round(configEditing.mines)});
              }
            }}
          />
          <Button
            style={{height: '55px', width: '45px', padding: '0', marginLeft: '-10px'}}
            onClick={(e) => {
              setDrawerOpen(false);
              setConfigEditing(config);
          }}>
            <Icon cancel src={cancel} alt="Cancel" />
          </Button>
          <Button
            type="submit"
            style={{height: '55px', width: '45px', padding: '0', marginLeft: '-20px'}}
            onClick={(e) => {
            e.preventDefault();
            setDrawerOpen(false);
            console.log(config, configEditing);
            console.log(config !== configEditing);
            if (config !== configEditing && configEditing.mines < configEditing.rows * configEditing.cols) {
              setConfig(configEditing);
              setGameOver(true);
              restart();
            }
            // return false;
          }}>
            <Icon src={confirm} alt="Confirm" />
          </Button>
        </form>
      </Drawer>
      <Config src={gear} alt="configure" onClick={() => {
        setDrawerOpen(true);
      }} />
      <Header>
        <Counter victory={victory}>
          {gameOver && gameOver !== "reset" ? (victory ? "Victory!" : "You lost") : (
            <>
              {<div>{bees}</div>}
              <img src={bee} alt="bees" />
            </>)}
        </Counter>
        <button onClick={() => {
          restart();
        }} style={{padding: '0 2% 0 2%'}}>Restart</button>
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
