import React, { Fragment } from 'react'
import crypto from 'crypto'

function GameBoard (): JSX.Element {
  const board: boolean[][] = new Array(9).fill(new Array(9).fill(true))

  return (
      <div className="GameBoard">
        {board.map((rows) => {
          return (
            <Fragment key={crypto.randomUUID()}>{rows.map(() => {
              return <div className='GameBoard-Tile' key={crypto.randomUUID()}></div>
            })}</Fragment>
          )
        })}
      </div>
  )
}

export default GameBoard
