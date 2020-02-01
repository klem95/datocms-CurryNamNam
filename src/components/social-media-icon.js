import React from 'react'
import styled from 'styled-components'
import * as styleDict from '../style-dictionary'
import icon from '../images/instagram.png';

const Item =styled.div ` 
    display:flex;
    align-items: center;
    margin-bottom: 20px;
`

const Text = styled.p ` 
    color: white;
    margin: 0px;
    padding-right: 10px;
    font-size: ${styleDict.FontSizes.h4};
    font-family: ${styleDict.fontFamilies.RalewayExtraBold};
    font-weight: 800;
`


const SoMeIcon = (props) => {
    return(
        <>
            <Item> 
                <Text>[Something]</Text><img src={icon}/>
            </Item>
        </>
    )
}

export default SoMeIcon