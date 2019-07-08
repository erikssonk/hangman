import { createContext } from 'react'

export const defaultGameStats = [
	{
		running: false,
		guessedLetters: [],
		letterPositions: [],
		currentWord: '',
		eventSet: false

	},{
		start: () => {},
		reset: () => {},
		guessLetter: (letter) => {},
		save: () => {}
	}
]

const gameContext = createContext(defaultGameStats);

export default gameContext 