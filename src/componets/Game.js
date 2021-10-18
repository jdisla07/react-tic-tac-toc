import React, {useState} from 'react';
import Board from "./Board";

let style = {
    width:'200px',
    margin: '20px auto'
}

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function Game() {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board)

    const handleClick = (i) => {
        let boardCopy = [...board];
        if(winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? 'X':'O';
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    const renderMoves = () => {
        return (
            <button onClick={()=>setBoard(Array(9).fill(null))}> Start Game</button>
        )
    }
    return (
        <>
            <Board squares={board} onClick={handleClick}/>
            <div style={style}>
                <p>{winner ? 'Winner'+winner:'Next Player'+ xIsNext ? 'X':'O'}</p>
                {renderMoves()}
            </div>
        </>

    );
}

export default Game;