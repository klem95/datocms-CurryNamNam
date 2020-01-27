import React from 'react'
import styled from 'styled-components';

const Container = styled.div `
    grid-area: portfolio;
    background-color: yellow;
`

const Portfolio = (props) => {
    
    return(
        <Container>
            <h1>Portfolio</h1>
        </Container>
    )

}

export default Portfolio