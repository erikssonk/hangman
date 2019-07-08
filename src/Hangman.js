import React from 'react'
import Header from './ui/Header'
import { Game } from './Game'
import GlobalStyle from './Global'
import Results from './Results'

const Hangman = () => {
	return (
		<Game>
			<GlobalStyle />
			<Header />
			<Results />
		</Game>
	)
}

export default Hangman