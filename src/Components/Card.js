import React from 'react'
import styled from 'styled-components'

const Card = ({ type }) => {
	switch (type) {
		case 'fullWidth':
			return <FullWidthCard />

		case 'halfWidth':
			return <HalfWidthCard />

		case 'oneThird':
			return <OneThirdCard />

		default:
			return null
	}
}

const FullWidthCard = styled.div`
	width: 100%;
	background-color: #8de4ff;
	height: 269px;
	border-radius: 3px;
	box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.25);
`

const OneThirdCard = styled.div`
	width: 32%;
	background-color: #dac4f7;
	height: 269px;
	border-radius: 3px;
	box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.25);
`

const HalfWidthCard = styled.div`
	width: 49%;
	height: 269px;
	background-color: #2a4494;
	border-radius: 3px;
	box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.25);
`

export default Card
