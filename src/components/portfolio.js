import React from 'react'
import styled from 'styled-components';
import Card from './card'

const Container = styled.div `
    grid-area: portfolio;
`

const Portfolio = (props) => {
    
    return(
        <Container>
            <h1>Portfolio</h1>
        </Container>
    )

}

export default Portfolio