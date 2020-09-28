import React from 'react';
import {Link} from 'react-router-dom';

class About extends React.Component {
    render () {
        return (
            <section className="about">
                <div className="aboutPage">
                <h1>About</h1>
                <h2>Rules</h2>
                <ol className="orderedList">
                    <li>Any live cell with fewer than two live neighbors dies, as if by underpopulation.</li>
                    <li>Any live cell with two or three live neighbors lives on to the next generation.</li>
                    <li>Any live cell with more than three live neighbors dies, as if by overpopulation.</li>
                    <li>Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</li>
                </ol>
                <h2>The Algorithm</h2>
                <p className="algoP">The Game of Life is a cellular automaton designed in 1970 by British mathematician John Horton Conway. It takes zero players because the game runs itself from an intital state set by a user. The game is comprised of a grid of square cells with each cell being alive/on or dead/off. The game follows the rules and affects each cell based on its eight neighbors directly above, below, left, right, and diagonally. In theory, Conway's Game of Life is Turing complete in that anything that can be computed algorithmically can be computed with the game.</p>
                </div>
                <div className="facts">
                    <h2>Notes and Reflections about the Game of Life</h2>
                    <p>1. Life is probably the most often programmed computer game in existence. There are many different variations and information on the web.</p>
                    <br/>
                    <p>2. Just like we can study simple animals (like worms) to discover things about more complex animals (like humans), people can study the game of Life to learn about patterns and behaviors in more complex systems.</p>
                    <br/>
                    <p>3. The behavior of cells or animals can be better understood using simple rules. Behavior that seems intelligent, such as we see in ant colonies might just be simple rules that we don't understand yet.</p>
                    <br/>
                    <p>4. Traffic problems might be solved by analyzing them with the mathematical tools learned from these types of simulations. (i.e. Unjamming Traffic with Computers)</p>
                    <br/>
                    <p>5. Computer viruses are also examples of cellular automata. Finding the cure for computer viruses could be hidden in the patterns of this simple game.</p>
                    <br/>
                    <p>6. Human diseases might be cured if we could better understand why cells live and die.</p>
                    <br/>
                    <p>7. Exploring the galaxies would be easier if machines could be invented that could build themselves. Imagine sending a probe to Mars that could build a copy of itself. Although this is theoretically possible, it hasn't been invented yet!</p>
                    <br/>
                </div>
                <Link to="/" className="btn">Game</Link>
            </section>
        )
    }
}

export default About; 