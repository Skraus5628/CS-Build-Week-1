import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react';
// import Cell from './Cells'
// // import useRect from './useRect';

const CELL_SIZE = 20;
const WIDTH = 600;
const HEIGHT = 600;


class Cell extends React.Component {

    render() {
        const { x, y } = this.props;
        return (
            <div id = "Cell" className="Cell-light" style={{
                left: `${CELL_SIZE * x + 1}px`,
                top: `${CELL_SIZE * y + 1}px`,
                width: `${CELL_SIZE - 1}px`,
                height: `${CELL_SIZE - 1}px`,
            }} />
        );
    }
}

class Game extends React.Component{
    constructor(){
        super();
        this.rows = HEIGHT / CELL_SIZE;
        this.cols = WIDTH / CELL_SIZE;

        this.board = this.makeEmptyBoard();
    }

    state = {
        cells: [],
        interval: 1000,
        isRunning: false,
        generation: 1,
        theme: 'dark',
    }

        componentDidMount = () =>{

        }

             // Trying to put in param to auto time out game when no living cells remain
    // componentDidUpdate = () =>{
    //     while(this.state.isRunning = false){
    //         this.handleClick()
    //     }
    // }

    // Create an empty board
    makeEmptyBoard(){
        let board = [];
        for (let y = 0; y < this.rows; y++){
            board[y] = [];
            for (let x = 0; x < this.cols; x++){
                board[y][x] = false;
            }
        }
        return board;
    }

    // Calculate the position of a board element

    getElementOffset(){
        const rect = this.boardRef.getBoundingClientRect();
        const doc = document.documentElement;

        return{
            x: (rect.left + window.pageXOffset) - doc.clientLeft,
            y: (rect.top + window.pageYOffset) - doc.clientTop,
        };
    }

    // Create cells from this.Board
    makeCells(){
        let cells = [];
        for(let y = 0; y < this.rows; y++) {
            for(let x = 0; x < this.cols; x++){
                if (this.board[y][x]){
                    cells.push({ x, y});
                }
            }
        }
        return cells;
    }

    // preset cells?
    // makePremadeCells(){
    //     let cells = [];
    //     let y = 3
    //     let x = 5
    //     if (this.board[y][x]){
    //            cells.push({x, y})
    //     }
    // }

    handleClick = (event) => {
        const elemOffset = this.getElementOffset();
        const offsetX = event.clientX - elemOffset.x;
        const offsetY = event.clientY - elemOffset.y;

        const x = Math.floor(offsetX / CELL_SIZE);
        const y = Math.floor(offsetY / CELL_SIZE);

        
        if (x >= 0 && x <= this.cols && y >= 0 && y <= this.rows){
            this.board[y][x] = !this.board[y][x];
        }

        this.setState({ cells: this.makeCells() });
       
    }

    

// Game helpers

    runGame = () =>{
        this.setState({ isRunning: true });
        this.runIteration();
    }

    stopGame = () =>{
        this.setState({ isRunning: false });
        if (this.timeoutHandler){
            window.clearTimeout(this.timeoutHandler);
            this.timeoutHandler = null;
        }
    }

    handleIntervalChange = (event) =>{
        this.setState({ interval: event.target.value });
    }

    setHighInterval = (value) =>{
        this.setState({ interval: 500 })
    }

    setRegInterval = (value) =>{
        this.setState({ interval: 1000})
    }

    setLowInterval = (value) =>{
        this.setState({ interval: 1400 })
    }

    runIteration(){
        console.log('running iteration');
        let newBoard = this.makeEmptyBoard();

        //  TODO: add logic for iterations here
        
        for (let y = 0; y < this.rows; y++){
            for (let x = 0; x < this.cols; x++){
                
                let neighbors = this.calculateNeighbors(this.board, x, y);
                
                if (this.board[y][x]){
                    if (neighbors === 2 || neighbors === 3){
                        newBoard[y][x] = true;
                        
                    } else {
                        newBoard[y][x] = false;
                    }
                } else {
                    if (!this.board[y][x] && neighbors === 3){
                        newBoard[y][x] = true;
                     
                    }
                }
                // console.log(this.state.cells)
                if(this.state.cells <= 0){
                    this.stopGame()
                }
            }
        }

        this.board = newBoard;
        this.setState({ cells: this.makeCells() });
        this.state.generation++;

        this.timeoutHandler = window.setTimeout(() =>{
            // this.runIteration();
            if(this.state.isRunning = true){
                this.runIteration()
            }
            else{
                this.stopGame()
            }
        }, this.state.interval);
    }

    /**
     * Calculate number of neighbors at point (x,y)
     * @param {Array} board
     * @param {int} x 
     * @param {int} y
     */

    calculateNeighbors(board, x, y){
        let neighbors = 0;
        const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1] [1, 1], [1, 0], [1, -1], [0, -1]];
        for (let i = 0; i < dirs.length; i++){
            const dir = dirs[i];
            let y1 = y + dir[0]
            let x1 = x + dir[1];

            if (x1 >= 0 && x1 < this.cols && y1 >= 0 && y1 < this.rows && board[y1][x1]){
                neighbors++;
            }
        }

        return neighbors;
    }

    handleClear = () =>{
        this.board = this.makeEmptyBoard();
        this.setState({ cells: this.makeCells() });
        this.setState({ generation: 1 });
    }

    handleRandom = () =>{
        for (let y = 0; y < Math.floor(Math.round(Math.random() * 80)); y++){
            for (let x = 0; x < Math.floor(Math.round(Math.random() * 80)); x++){
                this.board[y][x] = Math.round(Math.random());
            }
        }

       
        this.setState({ cells: this.makeCells()});
        
    }

    setDarkTheme = () =>{
      const { cells } = this.state
        document.getElementById('Board').className = 'Board'
        // document.getElementById('Cell').querySelectorAll('Cell').className = 'Cell';
        // console.log(cells)
    }

    // setDarkCell =(Cell) =>{
    //     document.getElementById('Cell').className = 'Cell';
    // }

    setLightTheme = () =>{
        document.getElementById('Board').className = 'Board-light';
    }

    render(){
        const { cells, interval, generation, isRunning } =this.state;
        return (
            <div className="game">
                <div className="ruleblock">
                <div id='Board' className="Board" 
                style={{ width: WIDTH, height: HEIGHT, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px` }}
                    onClick={this.handleClick} ref={(n) =>{
                        this.boardRef = n;
                    }}
                    >
                    
                    {cells.map(cell =>(

                        <Cell id='Cell' className='Cell-light' x={cell.x} y={cell.y} key={`${cell.x}, ${cell.y}`}/>
                    ))}
                </div>
                <div className="rules">
                <h2>Rules</h2>
                <ol className="list">
                    <li>Any live cell with fewer than two live neighbors dies, as if by underpopulation.</li>
                    <li>Any live cell with two or three live neighbors lives on to the next generation.</li>
                    <li>Any live cell with more than three live neighbors dies, as if by overpopulation.</li>
                    <li>Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</li>
                </ol>
                </div>
                </div>
                <div className="controls">
                    <div className ="spd-input">
                    Update every <input value={this.state.interval} onChange={this.handleIntervalChange}/> msec
                    {isRunning ? 
                        <button className="btn-primary" onClick={this.stopGame}>Stop</button> :
                        <button className="btn-success" onClick={this.runGame}>Run</button>
                        
                    }
                    <button className="btn" onClick={this.handleRandom}>Random</button>
                    <button className="btn" onClick={this.handleClear}>Clear</button>
                    </div>
                    <h2 className="generation" value={this.state.generation}>You are on Generation {generation}</h2>
                    <div className="settings">
                    <h3>Options</h3>
                    <button className="btn" onClick={this.setDarkTheme}>Dark Theme</button>
                    <button className="btn" onClick={this.setLightTheme}>Light Theme</button>
                    <button className="btn" onClick={this.setLowInterval}>Slow</button>
                    <button className="btn" onClick={this.setRegInterval}>Moderate</button>
                    <button className="btn" onClick={this.setHighInterval}>Fast</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;