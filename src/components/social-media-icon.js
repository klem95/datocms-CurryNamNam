import React from 'react'
import styled from 'styled-components'
import * as styleDict from '../style-dictionary'
import icon from '../images/instagram.png';

const Item =styled.div ` 
    display:flex;
    align-items: center;
`

const Logo = styled.img ` 
    src: ${icon};
`

const SoMeIcon = (props) => {
    return(
        <>
            <Item> 
                <img src={icon}/>
            </Item>
        </>
    )
}

export default SoMeIcon