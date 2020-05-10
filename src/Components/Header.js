import React from 'react'
import styled from 'styled-components'

const Header = ({ darkModeEnabled }) => {
	return (
		<header
			style={{
				marginTop: 40,
				backgroundColor: darkModeEnabled ? '#121212' : '#ffffff'
			}}
		>
			<Title>Dark Mode Switch</Title>
		</header>
	)
}

const Title = styled.h1`
	font-size: 24px;
	color: #000000;
	font-weight: 900;
`

export default Header
