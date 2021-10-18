import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Board from "./Board";
import {calculateWinner} from "../helpers";

Game.propTypes = {

};

let style = {
    width:'200px',
    margin: '20px auto'
}

function Game(props) {

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

    const jumpTo = () => {

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