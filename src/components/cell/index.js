import React, {useState, useEffect} from 'react';
import {CellContainer} from './styles'
import bee from '../../assets/bee.png'
import flag from '../../assets/flag.png'

export default function Cell({cell, gameOver, setGameOver, restart, display, getEmptyCells, count}) {
  const [hidden, setHidden] = useState(true);
  const [flagged, setFlagged] = useState(false);
  const [filter, setFilter] = useState('');
  const [hoverFilter, setHoverFilter] = useState('');

  useEffect(() => {
    setHidden(!gameOver);
    setFlagged(false);
  }, [gameOver])

  useEffect(() => {
    // console.log(cell.display)
    if (cell.display && !flagged) {
      setHidden(false);
      // setFlagged(false);
      // console.log(hidden)
    }
  }, [cell.display, flagged])

  useEffect(() => {
    if (!hidden) {
      if (cell.nearBombs === 0) {
        getEmptyCells(cell);
      }
      display(cell);
    }
  }, [hidden, cell])

  useEffect(() => {
    if (hidden) {
      if (flagged) {
        setFilter('brightness(60%) hue-rotate(320deg)');
        setHoverFilter('brightness(70%) hue-rotate(50deg)');
      } else {
        setFilter('brightness(90%)');
        setHoverFilter('hue-rotate(35deg)');
      }
    } else if (cell.mine) {
      setFilter('brightness(75%) hue-rotate(340deg)');
      setHoverFilter('unset');
    } else if (cell.nearBombs === 0) {
      setFilter('brightness(10%) sepia(80%) invert(10%) hue-rotate(90deg)');
      setHoverFilter('empty');
    } else {
      setFilter('brightness(55%) sepia(50%)');
      setHoverFilter('brightness(55%) sepia(50%) hue-rotate(30deg)');
      // setFilter('brightness(25%) hue-rotate(290deg) invert(10%)');
    }
  }, [cell, hidden, flagged])

  return (
    <CellContainer
      filter={filter}
      hoverFilter={hoverFilter}
      number={cell.nearBombs}
      onClick={() => {
        // console.log(cell.nearBombs);
        if (gameOver) {
          restart();
          return;
        } else if (!flagged) {
          if (cell.mine) {
            setGameOver(true);
            return;
          }
          setHidden(false)
        }
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        if (!gameOver && hidden) {
          if (!flagged) {
            count(true);
          } else {
            count(false);
          }
          setFlagged(!flagged);
        }
      }}
    >
      <div>
        {flagged ? <img src={flag} alt="flag" style={{height: '50px', transform: Math.random() > 0.5 ? 'scaleX(-1)' : 'none'}} /> :
          hidden ? '' :
            cell.mine ? <img src={bee} alt=":(" style={{height: '50px', marginTop: '-4px', transform: Math.random() > 0.5 ? 'scaleX(-1)' : 'none'}} /> :
              cell.nearBombs > 0 ?
                cell.nearBombs :
                ''}
      </div>
    </CellContainer>
  );
}
