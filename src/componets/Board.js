import React from 'react';
import PropTypes from 'prop-types';
import Square from "./Square";

Board.propTypes = {
    squares: PropTypes.array,
    onClick: PropTypes.func
}

const style = {
    border: "4px solid darkblue",
    borderRadius: "10px",
    width: "250px",
    height: "250px",
    margin: "0 auto",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

function Board({squares, onClick}) {
    return (
        <div style={style}>
            {squares.map((square, index) => (
                <Square key={index} value={square} onClick={()=>onClick(index)}/>
            ))}
        </div>
    );
}

export default Board;