import React, { useState } from 'react'
import styled from 'styled-components'

import Header from './Header'
import Container from './Container'
import Card from './Card'
import Toggle from './Toggle'

const App = () => {
	const [ darkModeEnabled, setDarkModeEnabled ] = useState(false)

	const handleToggle = () =>
		setDarkModeEnabled(
			(darkModeEnabled) => (darkModeEnabled = !darkModeEnabled)
		)

	return (
		<Wrapper darkModeEnabled={darkModeEnabled}>
			<Container>
				<Header darkModeEnabled={darkModeEnabled} />
				<div style={{ marginTop: 40 }}>
					<Card type="fullWidth" />
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							marginTop: 30
						}}
					>
						<Card type="oneThird" />
						<Card type="oneThird" />
						<Card type="oneThird" />
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							marginTop: 30
						}}
					>
						<Card type="halfWidth" />
						<Card type="halfWidth" />
					</div>
				</div>
				<div style={{ position: 'absolute', top: '50%', right: '9%' }}>
					<Toggle handleToggle={handleToggle} />
				</div>
			</Container>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	background-color: ${(props) =>
		props.darkModeEnabled ? '#121212' : '#ffffff'};
`

export default App
