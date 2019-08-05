import { createContext } from 'react'

export const defaultGameStats = [
  {
    running: false,
    guessedLetters: [],
    letterPositions: [],
    currentWord: '',
    eventSet: false,
    message: false,
    won: false
  },{
    start: () => {},
    guessLetter: (letter) => {},
    updateLetterPositions: ()=> {},
    save: () => {}
  }
]

const gameContext = createContext(defaultGameStats);

export default gameContext
