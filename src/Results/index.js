import React, {useContext} from 'react'
import { gameContext } from '../Game/index'
import styled from '@emotion/styled'

const Wrapper = styled('div')`
	width: 100%;
	height: 100%;
	padding: 1rem;
	align-self: center;
	display: flex;
	align-items: center;
	flex-flow: column;

	p {
		padding: 1.125rem 0;
	}

	h2 {
		text-align: center;
		font-size: 1.5rem;
		padding: 1.5rem 0;
	}

	h3 {
		text-align: center;
		margin-bottom: 0.5rem;
	}

	div {
		margin: 1rem 0;
	}
`

const Letter = styled('span')`
	font-size: 1.25rem;
	margin: 0.5rem;
`

const Results = () => {
	const [gameStats] = useContext(gameContext)
	return (
		<Wrapper>
			<p>This is a very simple hangman game, press the key you want to guess</p>
			{gameStats.message}
			{gameStats.won && <h2>The correct word was<br /><br />{gameStats.currentWord}</h2>}
			{!gameStats.running && <h2>Press any key to begin</h2>}
			{gameStats.running && (
				<div>
					{gameStats.letterPositions.map((letter, index) => <Letter key={index + "_"+letter}>{letter}</Letter>)}
				</div>
			)}
			{gameStats.running && (
				<div className={"guessedLetters"}>
					<h3>You have guessed</h3>
					{gameStats.guessedLetters.map((letter, index) => <Letter key={index + "_"+letter}>{letter}</Letter>)}
				</div>
			)}			
		</Wrapper>
	)
}

export default Results