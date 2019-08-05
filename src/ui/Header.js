import React from 'react'
import styled from '@emotion/styled'

const Nav = styled('nav')`
  width: 100%;
  background-color: #8db0dc;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled('h1')`
  font-size: 2rem;
  padding: 1.125rem;
`

const Small = styled('span')`
  font-size: 0.95rem;
  vertical-align: middle;
`

const Header = () => {
  return (
    <Nav>
      <Title>
        The <Small>(ugly)</Small> Hangman Game 
      </Title>
    </Nav>
  )
}

export default Header