import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'


const Container = styled.div `
    grid-area: aboutMe;
`

const AboutMe = (props) => {
    return(
        <>
            <Container>
                <h1>About me</h1>
                <Link to="/about/">Hello</Link>
            </Container>
        </>
    )
}

export default AboutMe