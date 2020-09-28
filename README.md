This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Welcome to this iteration of Conway's Game of Life!
    The Game of Life is used to provide a visual way to view the interaction of neighboring cells and see how those interactions following a set of algorithmic rules play out over generations/iterations of time! From traffic jams, cell replication, and population growth/extinction there are many applications it can be tailored to!

# Conway's game of life rules
1. Any live cell with fewer than two live neighbors dies, as if caused by under population.
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

# To locally install and run this Repo
1. Run npm install
2. Run npm start

# Playing the Game and Game Features:
1. A default blank grid will open! The rules of the game appear to the right with the UI at the bottom.
2. You can click individual squares on the grid to create [live cells]. All non-selected or blank cells are [dead cells] for the purpose of this game!
3. the [Text Entry Field] allows you to manually set the time in Msec the game will perform at. There are also buttons on the bottom to load pre-set speeds which also display as updated in the entry field!
4. If you wish to generate random grids, you can tap the [Random] button as often as you like. It will remove cells if they're re-selected and populate the grid randomly. 
5. The [Clear] button will reset the generation counter and the board.
6. The run button will start your simulation at the set speed, speed *can* be adjusted while the game runs. 
7. The [run] button will turn into the [stop] button, which will allow you to pause or stop the game. Simply select [Run] to start the game again!
8. As the game iterates and cells cycle through their life, the generation counter will increment to show how many generations have passed.
9. If you wish to switch from the default [Dark] Themed black background, there is at this time a [Light] Themed background you can try!
10. The Navigation bar has an [About] page link if you wish to learn more about the Game of Life.

# Required dependencies:
1. react-router-DOM
2. react-DOM


# What is Conway's Game of Life?

    The Game of Life is a cellular automaton designed in 1970 by British mathematician John Horton Conway. It takes zero players because the game runs itself from an intital state set by a user. The game is comprised of a grid of square cells with each cell being alive/on or dead/off. The game follows the rules and affects each cell based on its eight neighbors directly above, below, left, right, and diagonally. In theory, Conway's Game of Life is Turing complete in that anything that can be computed algorithmically can be computed with the game.

# Notes and fun facts about the game!

1. Life is probably the most often programmed computer game in existence. There are many different variations and information on the web.
2. Just like we can study simple animals (like worms) to discover things about more complex animals (like humans), people can study the game of Life to learn about patterns and behaviors in more complex systems.
3. The behavior of cells or animals can be better understood using simple rules. Behavior that seems intelligent, such as we see in ant colonies might just be simple rules that we don't understand yet.
4. Traffic problems might be solved by analyzing them with the mathematical tools learned from these types of simulations. (i.e. Unjamming Traffic with Computers)
5. Computer viruses are also examples of cellular automata. Finding the cure for computer viruses could be hidden in the patterns of this simple game.
6. Human diseases might be cured if we could better understand why cells live and die.
7. Exploring the galaxies would be easier if machines could be invented that could build themselves. Imagine sending a probe to Mars that could build a copy of itself. Although this is theoretically possible, it hasn't been invented yet!


# Future project improvements:

    With more time permitting, the following would be ideal additions!
1. Refactor code to React Hooks, partial refactor is in place.
2. Create some pre-loaded Cell layout arrays to use and load as default!
3. Toggle the color cycling patterns of the cells.
4. A smoother UI for visiters.
5. More Theme options for users.
6. Improved layout design for mobile and tablet users.
