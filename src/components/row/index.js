import React from 'react';
import Cell from '../../components/cell/index';
import {RowContainer} from './styles'


export default function Row({row, setGameOver, gameOver, restart, getEmptyCells, countFlags, countMinesFlagged, victory}) {

  return (
    <RowContainer
      rowNumber={row[0].row}
    >
      {row.map((cell, index) => {
        return <Cell
          restart={restart}
          setGameOver={() => setGameOver(true)}
          gameOver={gameOver}
          cell={cell}
          victory={victory}
          key={index}
          getEmptyCells={(cell) => getEmptyCells(cell)}
          countFlags={(type) => countFlags(type)}
          countMinesFlagged={(type) => countMinesFlagged(type)}
        />
      })}
    </RowContainer>
  );
}
