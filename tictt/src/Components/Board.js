import React from 'react'

function Board({ size, board, handleclick }) {
    return (
        <div className='board' style={{ gridTemplateColumns: `repeat(${size},50px)` }}>
            {

                Array.isArray(board) && board.map((row, rowIndex) => {
                    return row.map((cell, colIndex) => {
                        return <div  key={`${rowIndex}-${colIndex}`} 
                        className='cell'
                         onClick={
                            () => handleclick(rowIndex, colIndex)
                            }>{cell}</div>
                    })
                })
            }
        </div>
    )
}

export default Board