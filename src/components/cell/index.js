import React, {useState, useEffect} from 'react';
import {CellContainer} from './styles'
import bee from '../../assets/bee2.png'
import flag from '../../assets/flag.png'


export default function Cell({cell, gameOver, setGameOver, countRevealed, restart, getEmptyCells, countFlags, countMinesFlagged, victory}) {
  const [hidden, setHidden] = useState(true);
  const [flagged, setFlagged] = useState(false);

  useEffect(() => {
    setHidden(!gameOver);
    setFlagged(false);
  }, [gameOver])

  useEffect(() => {
    if (cell.display && !flagged && hidden) {
      setHidden(false);
      countRevealed();
    }
  }, [cell.display, flagged])

  useEffect(() => {
    if (!hidden) {
      if (cell.nearBombs === 0) {
        getEmptyCells(cell);
      }
    }
  }, [hidden, cell.nearBombs])

  return (
    <CellContainer
      number={cell.nearBombs}
      victory={victory}
      random={Math.random() > .5}
      evenRow={cell.row % 2 !== 0}
      evenCol={cell.col % 2 !== 0}
      type={hidden ? (flagged ? 'flag' : 'hidden') : cell.mine ? 'mine' : cell.nearBombs === 0 ? 'empty' : 'number'}
      onClick={() => {
        if (gameOver) {
          restart();
          return;
        } else if (!flagged) {
          if (cell.mine) {
            setGameOver(true);
            return;
          }
          setHidden(false);
          countRevealed();
        }
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        if (!gameOver && hidden) {
          countFlags(!flagged);
          if (cell.mine) {
            countMinesFlagged(!flagged);
          }
        }
        setFlagged(!flagged);
      }
      }
    >
      <div>
        {flagged ? <img src={flag} alt="flag" style={{height: '40px', transform: Math.random() > 0.5 ? 'scaleX(-1)' : 'none'}} /> :
          hidden ? '' :
            cell.mine ? <img src={bee} alt=":(" style={{height: '60px', marginTop: '-10px', transform: `rotate(${Math.random() * 360}deg`}} /> :
              cell.nearBombs > 0 ?
                cell.nearBombs :
                ''}
      </div>
    </CellContainer >
  );
}
