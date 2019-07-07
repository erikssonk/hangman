import { createContext } from 'react'

export const defaultGameStats = [
	{
		running: false,
		guessedLetters: [],
	},{
		newGame: () => {},
		resetGame: () => {},
		guessLetter: (letter) => {},
		save: () => {}
	}
]

const gameContext = createContext(defaultGameStats);

export default gameContext 