import React, { useState } from 'react'
import gameContext, { defaultGameStats } from './Context'

import styled from '@emotion/styled'

const words = ["row",
  "demonstrate",
  "love",
  "refrigerator",
  "fate",
  "panel",
  "poetry",
  "taxi",
  "angel",
  "wrist",
  "take",
  "computer",
  "economy",
  "silver",
  "list",
  "flat",
  "performance",
  "symptom",
  "wardrobe",
  "summit",
  "float",
  "society",
  "jump",
  "voter",
  "fortune",
  "migration",
  "notorious",
  "hour",
  "wolf",
  "comfort",
  "withdraw",
  "enjoy",
  "assessment",
  "dangerous",
  "wear",
  "out",
  "exaggerate",
  "rebel",
  "musical",
  "message",
  "silence",
  "observation",
  "ghostwriter",
  "shed",
  "repetition",
  "leg",
  "mushroom",
  "page",
  "institution",
  "bad",
  "board"
]

const getRandomWord = () => {
  const min = 0
  const max = words.length - 1
  const getIndex = Math.floor(Math.random() * (max - min + 1)) + min;
  return words[getIndex].toLowerCase()
}

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  height: 100%;
`

const Game = (props) => {
  const { children } = props
  const [gameState, setGameState] = useState(defaultGameStats)
  const [gameData, gameFunction] = gameState

  gameFunction.guessLetter = (letter) => {
    gameData.guessedLetters.push(letter)
    gameFunction.save()
  }

  gameFunction.updateLetterPositions = () => {
    gameData.letterPositions = gameData.currentWord.split('').map((letter) => {
      if (gameData.guessedLetters.indexOf(letter) >= 0) {
        return letter
      }
      return '_'
    })

    if (gameData.letterPositions.join('') === gameData.currentWord) {
      gameData.message = <h2>Congratz you won the game! :)</h2>
      gameData.running = false
      gameData.won = true
    }
  }

  gameFunction.start = () => {
    gameData.running = true
    gameData.won = false
    gameData.guessedLetters = []
    gameData.message = false
    gameData.currentWord = getRandomWord()
    gameFunction.updateLetterPositions()
    gameFunction.save()
  }

  gameFunction.save = () => {
    setGameState([gameData, gameFunction])
  }

  if (typeof window !== 'undefined' && !gameData.eventSet) {
    window.addEventListener('keypress', (event) => {
      if (!gameData.running) {
        gameFunction.start()
        return
      }

      if (!event.key.match(/[a-z]/i)) {
        gameData.message = 'You pressed an invalid key, valid input is a to z'
        gameFunction.save()
        return
      }

      if (gameData.guessedLetters.indexOf(event.key) >= 0) {
        gameData.message = 'You have already guessed the letter ' + event.key.toLowerCase()
        gameFunction.save()
        return
      }
      gameData.guessedLetters.push(event.key.toLowerCase())
      gameData.message = false
      gameFunction.updateLetterPositions()
      gameFunction.save()
      return
    })

    gameData.eventSet = true
    gameFunction.save()
  }

  return (
    <Wrapper>
      <gameContext.Provider value={[gameData, gameFunction]}>
        {children}
      </gameContext.Provider>
    </Wrapper>
  );
}

export default Game
