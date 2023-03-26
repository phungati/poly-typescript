import { useState } from "react"
import Square from "./square"

const Board = () => {
    const [game, setGame] = useState([null, null, null, null, null, null, null, null, null])
    const [player, setPlayer] = useState(true)

    const handlePlay = (position) => {
        // console.log(position);
        // game[position] = "X"
        // game = [null, null, X, null ...]
        // shadow copy .slice {...} map
        const newGame = game.slice()
        newGame[position] = player ? "X" : "O"
        setGame(newGame)
        setPlayer(!player)
    }
    
    const listWinner = [
        [0, 1, 2], [0, 4, 8], [0,3,6]
    ]


    // game = [X, 0, 0, X, null, null, X, null, null]
    const checkWinner = () => {
        for(let i = 0; i < listWinner.length; i++) {
            const [p1, p2, p3] = listWinner[i]
            if (game[p1] === game[p2] && game[p2] === game[p3]) {
                return game[p1]
            }
        }
        return null
    }

    return <>
    <h2>Winner is: {checkWinner()}</h2>
    <div className="grid grid-cols-3 gap-2">
        <Square value={game[0]} handlePlay={() => handlePlay(0)}/>
        <Square value={game[1]} handlePlay={() => handlePlay(1)}/>
        <Square value={game[2]} handlePlay={() => handlePlay(2)}/>
        <Square value={game[3]} handlePlay={() => handlePlay(3)}/>
        <Square value={game[4]} handlePlay={() => handlePlay(4)}/>
        <Square value={game[5]} handlePlay={() => handlePlay(5)}/>
        <Square value={game[6]} handlePlay={() => handlePlay(6)}/>
        <Square value={game[7]} handlePlay={() => handlePlay(7)}/>
        <Square value={game[8]} handlePlay={() => handlePlay(8)}/>
    </div>
    </>
}

export default Board