import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
    grid-area: aboutMe;
`

const AboutMe = (props) => {
    return(
        <>
            <Container>
                <h1>About me</h1>
            </Container>
        </>
    )
}

export default AboutMe