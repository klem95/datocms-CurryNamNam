import React from 'react'
import styled from 'styled-components';

const Container = styled.div `
    grid-area: footer;
    background-color: red;
`
const Footer = (props) => {
    return(
        <Container>
            <h1>Footer</h1>
        </Container>
    )
}

export default Footer

