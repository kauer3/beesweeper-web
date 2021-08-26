import React, {useState, useEffect} from 'react';
import {CellContainer} from './styles'
import bee from '../../assets/bee2.png'
import flag from '../../assets/flag.png'
import miss from '../../assets/miss2.png'

export default function Cell({cell, gameOver, gridSet, setGameOver, countRevealed, getEmptyCells, countFlags, countMinesFlagged, victory}) {
  const [hidden, setHidden] = useState(true);
  const [flagged, setFlagged] = useState(false);
  const [missFlagged, setMissFlagged] = useState(false);

  useEffect(() => {
    if (gameOver === true) {
      if (!flagged || cell.mine) {
        setFlagged(false);
        setHidden(false);
      } else {
        setMissFlagged(true);
      }
    }
  }, [gameOver, flagged, cell.mine])

  useEffect(() => {
    if (gameOver === false) {
      setFlagged(false);
      setHidden(true);
      setMissFlagged(false);
    }
  }, [gameOver])

  useEffect(() => {
    if (cell.display && !flagged && hidden) {
      setHidden(false);
      countRevealed();
    }
  }, [cell.display, flagged, hidden])

  useEffect(() => {
    if (!hidden) {
      if (cell.nearBombs === 0) {
      // TODO check if is called on other cell props changes 
        getEmptyCells(cell);
      }
    }
  }, [hidden, cell])

  useEffect(() => {
    console.log(gridSet);
  }, [gridSet])

  return (
    <CellContainer
      slide={gridSet}
      number={cell.nearBombs}
      victory={victory}
      random={Math.random() > .5}
      evenRow={cell.row % 2 !== 0}
      evenCol={cell.col % 2 !== 0}
      type={hidden ? (flagged ? (missFlagged ? 'missFlag' : 'flag') : 'hidden') : cell.mine ? 'mine' : cell.nearBombs === 0 ? 'empty' : 'number'}
      onClick={() => {
        if (gameOver) {
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
          setFlagged(!flagged);
        }
      }}
    >
      <div>
        {flagged ? <img src={flag} alt="flag" style={{height: '40px', transform: `scale(${cell.col % 2 === 0 ? (missFlagged ? '-1.3, 1.3' : '-1, 1') : (missFlagged ? '1.3, 1.3': '1')}`}} /> :
          hidden ? '' :
            cell.mine ? <img src={bee} alt=":(" style={{height: '60px', marginTop: '-8px', transform: `rotate(${Math.random() * 360}deg)${gameOver && !victory ? ' scale(1.6)' : ''}`}} /> :
              cell.nearBombs > 0 ?
                cell.nearBombs :
                ''}
      </div>
      {missFlagged &&
      <img src={miss} alt="missFlagged" style={{height: '50px', filter: 'invert(100%)', transform: 'translate(7px, -50px)'}} />
      }
    </CellContainer >
  );
}
