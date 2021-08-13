import React from 'react';
import Cell from '../../components/cell/index';
import {RowContainer} from './styles'


export default function Row({row, setGameOver, gameOver, restart, getEmptyCells, count, display}) {

  return (
    <RowContainer
      rowNumber={row[0].row}
    >
      {row.map((cell, index) => {
        return <Cell
          restart={restart}
          setGameOver={() => setGameOver(true)}
          gameOver={gameOver}
          display={(cell) => display(cell)}
          cell={cell}
          key={index}
          getEmptyCells={(cell) => getEmptyCells(cell)}
          count={(type) => count(type)}
        />
      })}
    </RowContainer>
  );
}
