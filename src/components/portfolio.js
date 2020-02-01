import React from 'react'
import styled from 'styled-components';
import Card from './card'

const Container = styled.div `
    grid-area: portfolio;
    height: 1000px;
    background-color: grey;
`

const Portfolio = (props) => {
    
    return(
        <Container>
            <h1>Portfolio</h1>
        </Container>
    )

}

export default Portfolio