import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
    grid-area: skillUniverse;
    background-color: violet;
`

const SkillUniverse = (props) => {
    return(
        <>
            <Container>
                <h1>Skill Universe</h1>
            </Container>
        </>
    )
}

export default SkillUniverse