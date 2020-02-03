import React from 'react'
import styled from 'styled-components'
import * as styleDict from '../style-dictionary'
import icon from '../images/instagram.png';

const Item =styled.div ` 
    display:flex;
    align-items: center;
    margin-bottom: 20px;
    float: right
`

const Text = styled.p ` 
    color: white;
    margin: 0px;
    padding-right: 10px;
    font-size: ${styleDict.FontSizes.h4};
    font-family: ${styleDict.fontFamilies.RalewayExtraBold};
    font-weight: 800;
`
const SoMeImg = styled.img ` 
    src: url(${props=> props.src});
    width: 25px;
    height: 25px;

`


const SoMeIcon = (props) => {
    return(
        <>
            <Item> 
                <Text>[{props.id}]</Text><SoMeImg src={props.img}/>
            </Item>
        </>
    )
}

export default SoMeIcon