import React, { useState } from 'react'
import gameContext, { defaultGameStats } from './Context'

const Game = (props) => {
	const { children } = props
	const [gameState, setGameState] = useState(defaultGameStats)
	const [gameData, gameFunction] = gameState

	gameFunction.resetGame = () => {
		gameData.running = false;
		gameData.guessedLetters = [];
		gameFunction.save()
	}

	gameFunction.guessLetter = (letter) => {
		gameData.guessedLetters.push(letter)
		gameFunction.save()
	}

	gameFunction.save = () => {
		setGameState([gameData, gameFunction])
	}

	return (
		<gameContext.Provider value={[gameData, gameFunction]}>
			{children}
		</gameContext.Provider>
	);
}

export default Game