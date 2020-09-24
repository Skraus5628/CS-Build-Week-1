// import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react';
// import Cell from './Cells'
// // import useRect from './useRect';

// const Game = (props) => {


//     // const initialState = [
//     //     // cells = [],
//     //     interval = 100,
//     //     isRunning = false,
//     //     generation = 1,
//     //     theme = 'dark',
//     // ]

//     const [cells, setCells] = useState([])
//     const [isRunning, setRunning] = useState(false)
//     const [generation, setGeneration] = useState(1)
//     const [theme, setTheme] = useState()
//     const [interval, setInterval] = useState(100)
//     const [board, setBoard] = useState([])
 

    
//     // Create an empty board
   
//        const makeEmptyBoard = (rows, cols) => {
         
//         for (let y = 0; y < rows; y++){
//             board[y] = [];
//             for (let x = 0; x < cols; x++){
//                 board[y][x] = false;
//             }
//         }
//         setBoard([])
//     }

//         // Create cells from this.Board
//         const makeCells =(rows, cols, board) =>{
//              cells = [];
//             for(let y = 0; y < rows; y++) {
//                 for(let x = 0; x < cols; x++){
//                     if (board[y][x]){
//                         cells.push({ x, y});
//                     }
//                 }
//             }
//             return cells;
//         }

//     const handleClear = (board) =>{
//         setBoard(makeEmptyBoard());
//         // this.setState({ cells: this.makeCells() });
//         setCells(makeCells());
//         // this.setState({ generation: 1 });
//         setGeneration(1);
//     }

//     const handleRandom = (board) =>{
//         setBoard(makeEmptyBoard())
//         for (let y = 0; y < Math.floor(Math.random() * 60); y++){
//             for (let x = 0; x < Math.floor(Math.random() * 60); x++){
//                 board[y][x] = (Math.random() >-0.5);
//             }
//         }
//         setBoard()
//         // this.setState({ cells: this.makeCells()});
//         setCells(makeCells())
//     }

//         const runGame = () =>{
//         setRunning(true);
//         this.runIteration();
//     }

//     const stopGame = (timeoutHandler) =>{
//         setRunning(false)
//         if (timeoutHandler){
//             window.clearTimeout(timeoutHandler);
//             timeoutHandler = null;
//         }
//     }

//     const handleIntervalChange = (event) =>{
//         setInterval(event)
//     }

//      // Calculate the position of a board element

//      const getElementOffset = (boardRef) => {
//         const rect = boardRef.getBoundingClientRect()
//         const doc = document.documentElement;

//         return{
//             x: (rect.left + window.pageXOffset) - doc.clientLeft,
//             y: (rect.top + window.pageYOffset) - doc.clientTop,
//         };
//     }



//     const handleClick = (event, cols, rows, board) => {
//         const elemOffset = getElementOffset();
//         const offsetX = event.clientX - elemOffset.x;
//         const offsetY = event.clientY - elemOffset.y;

//         const x = Math.floor(offsetX / CELL_SIZE);
//         const y = Math.floor(offsetY / CELL_SIZE);

        
//         if (x >= 0 && x <= cols && y >= 0 && y <= rows){
//             board[y][x] = !board[y][x];
//         }

//         setCells(makeCells());
       
//     }



// // Game helpers

//     useEffect(() =>{


        
//     const runIteration = (rows, cols, board, cells) =>{
//         console.log('running iteration');
//         let newBoard = makeEmptyBoard();

//         //  TODO: add logic for iterations here
        
//         for (let y = 0; y < rows; y++){
//             for (let x = 0; x < cols; x++){
                
//                 let neighbors = calculateNeighbors(board, x, y);
                
//                 if (board[y][x]){
//                     if (neighbors === 2 || neighbors === 3){
//                         newBoard[y][x] = true;
//                     } else {
//                         newBoard[y][x] = false;
//                     }
//                 } else {
//                     if (!board[y][x] && neighbors === 3){
//                         newBoard[y][x] = true;
//                     }
//                 }
//                 if(cells === 0){
//                     stopGame()
//                 }
//             }
//         }

//         board = newBoard;
//         setCells({ cells: makeCells() });
//         setGeneration++;

//       const  timeoutHandler = window.setTimeout(() =>{
//             runIteration();
//         }, interval);
//     }

//     /**
//      * Calculate number of neighbors at point (x,y)
//      * @param {Array} board
//      * @param {int} x 
//      * @param {int} y
//      */

//     const calculateNeighbors= (board, x, y, cols, rows) =>{
//         let neighbors = 0;
//         const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1] [1, 1], [1, 0], [1, -1], [0, -1]];
//         for (let i = 0; i < dirs.length; i++){
//             const dir = dirs[i];
//             let y1 = y + dir[0]
//             let x1 = x + dir[1];

//             if (x1 >= 0 && x1 < cols && y1 >= 0 && y1 < rows && board[y1][x1]){
//                 neighbors++;
//             }
//         }

//         return neighbors;
//     }

  
//     // setDarkTheme = (Board, Cell) =>{
//     //     document.getElementById('Board').className = 'Board'
//     //     document.querySelectorAll('.Cell').className = 'Cell';
   
//     // }

//     // setDarkCell =(Cell) =>{
//     //     document.getElementById('Cell').className = 'Cell';
//     // }

//     // setLightTheme = () =>{
//     //     document.getElementById('Board').className = 'Board-light';
//     // }
//     })
    
//         // const { cells, interval, generation, isRunning } =this.state;
//         return (
//             <div>
//                 <div id='Board' className="Board-light" 
//                 style={{ width: WIDTH, height: HEIGHT, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px` }}
//                     onClick={handleClick} ref={(n, boardRef) =>{
//                         boardRef = n;
//                     }}
//                     >
                    
                   

//                         <Cell id='Cell' className='Cell-light' x={cells.x} y={cells.y} key={`${cells.x}, ${cells.y}`}/>
//                 </div>

//                 <div className="controls">
//                     Update every <input value={interval} onChange={handleIntervalChange}/> msec
//                     {isRunning ? 
//                         <button className="button" onClick={stopGame}>Stop</button> :
//                         <button className="button" onClick={runGame}>Run</button>
                        
//                     }
//                     <p value={generation}>You are on Generation {generation}</p>
//                     <button className="button" onClick={handleRandom}>Random</button>
//                     <button className="button" onClick={handleClear}>Clear</button>
//                     {/* <button className="button" onClick={this.setDarkTheme}>Dark Theme</button>
//                     <button className="button" onClick={this.setLightTheme}>Light Theme</button>
//                     <button className="button" onClick={this.setDarkCell}>Dark Cell</button> */}
//                 </div>
//             </div>
        
//         )}