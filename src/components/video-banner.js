import React from 'react'
import styled from 'styled-components';
import * as styleDict from '../style-dictionary'
import coverImg from '../images/coverImg.png';
import SoMeIcon from '../components/social-media-icon'

const Container = styled.div `
    position: relative;
    grid-area: video;
    height: 90vh;
    padding: 20px;
    z-index: ${styleDict.zIndex.videoBanner};
    
`
const Content = styled.div ` 
    position: relative;
    background-color: grey;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 40px 50px auto 50px 70px;
    grid-template-rows: 25% auto 25%;

    background-image: url(${coverImg});
    background-repeat: no-repeat;
    background-size: cover;
    
`

const RightCenterSticker = styled.div`     
    grid-column-start: 5;
    grid-column-end: 6;
    grid-row-start: 2;
    grid-row-end: 3;

    display: flex;
    justify-content: center;
    align-items: center;

`

const VBText = styled.h3 `
    letter-spacing: 5px;
    color: ${styleDict.fontColors.coverImg};;
    font-size: ${styleDict.FontSizes.h3};
    font-family: ${styleDict.fontFamilies.RalewayExtraLight};
    white-space: nowrap;
    border-bottom: 1px solid #ffffff ;
    padding-bottom: 3px;
    transform: rotate(-90deg);
    text-align: center;
`



const SocialMedia = styled.div ` 
    grid-column-start: 5;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 2;

    display:flex; 
    align-items: center;
`

const VideoBanner = (props) => {
    
    return(
        <Container>
            <Content>
                <RightCenterSticker>
                    <VBText>CurryNamNam Production</VBText>
                </RightCenterSticker>
                <SocialMedia>
                    <ul>
                        <li><SoMeIcon></SoMeIcon></li>
                    </ul>
                </SocialMedia>
            </Content>
        </Container>
    )

}

export default VideoBanner