import React from 'react'
import styled from '@emotion/styled'

const Nav = styled('nav')`
	width: 100%;
	background-color: #e0e0e0;
`

const Small = styled('span')`
	font-size: 13px;
	vertical-align: middle;
	line-height: 1em;
`

const Header = () => {
	return (
		<Nav>
			<h1>
				The <Small>(ugly)</Small> Hangman Game 
			</h1>
		</Nav>
	)
}

export default Header