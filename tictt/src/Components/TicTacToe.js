import React, { useState } from 'react'
import Board from './Board';
import {checkwinner,resetgame} from '../Uittls/checkWinner';

function TicTacToe({ size = 3 }) {
    const [board, setBoard] = useState(resetgame(size));
    const [turnX, setTurnX] = useState(true);
    const winner=checkwinner(board,size)
    const status= winner?`winner is ${winner}`:turnX?"turn x player":"turn o player"
    const handleClick = (rowNo, colNo) => {
        console.log(rowNo, colNo)
        const Deepcopy = JSON.parse(JSON.stringify(board));
        if(board[rowNo][colNo] || winner){
            return;
        }
        Deepcopy[rowNo][colNo]=  turnX? "x":"o"
        setBoard(Deepcopy)
        setTurnX(!turnX)

        
    }

    console.log(board)
    return (
        <div className='container'>
            <Board size={size} board={board} handleclick={handleClick} />
            <div className='status'> {status}</div>
            <button  onClick={ ()=>(setBoard(resetgame(size)))}>Reset</button>
        </div>
    )
}

export default TicTacToe