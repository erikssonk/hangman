import React from 'react'
import Header from './ui/Header'
import { Game } from './Game'
import GlobalStyle from './Global'

const Hangman = () => {
	return (
		<Game>
			<GlobalStyle />
			<Header />
			<div>Testing-div</div>
		</Game>
	)
}

export default Hangman