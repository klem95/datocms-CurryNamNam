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
    grid-template-columns: 40px 300px auto 40px;
    grid-template-rows: 40px 230px auto 40px;

    background-image: url(${coverImg});
    background-repeat: no-repeat;
    background-size: cover;
    
`
const NavUl = styled.ul `
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;

    list-style-type: none;
    position: relative;
    font-family: ${styleDict.fontFamilies.Capitol};
    font-size: ${styleDict.FontSizes.navMenu};  
    font-weight: 600;
    font-style: normal;
    color: ${styleDict.fontColors.coverImg};

    margin: 0px;
    padding: 0px;
`

const Li = styled.li `
    
    
    transition: 1s;
    &:hover {
        color: red; 
    }

`


const LeftStikkerCenterSticker = styled.div`     
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;

    margin-top: auto;

`

const MainText = styled.h2 `
    color: ${styleDict.fontColors.coverImg};;
    font-size: ${styleDict.FontSizes.h3};
    font-family: ${styleDict.fontFamilies.RalewayExtraBold};
    font-weight: 800;
    font-style: normal;
    white-space: nowrap;

    margin-bottom: 0px;
    
`
const SubText = styled(MainText) ` 
     font-size: ${styleDict.FontSizes.h4};
     margin-top: 5px;
`

const SocialMedia = styled.div ` 
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;

    display:flex; 
    margin-left: auto;
   
    
`
const UlSoMe = styled.ul ` 
     list-style-type: none;
     padding: 0px;
     margin: 0px;
     
     
`
const LiSoMe = styled.li `
    margin-bottom: 10px;
`
const AnimationZone = styled.div ` 
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;

    
    border-style: solid;
    border-color: #fff;
    border-width: 3px;


    margin-left: 20px;
    box-shadow: 10px 10px 20px 0px rgba(0,0,0,0.37);
`






const VideoBanner = (props) => {
    
    return(
        <Container>
            <Content>
                <NavUl>
                    <Li>Home</Li>
                    <Li>About</Li>
                    <Li>Contact</Li>
                </NavUl>
                <LeftStikkerCenterSticker>
                    <MainText>CurryNamNam // Production</MainText>
                    <SubText>Created By // Sune Øllgaard Klem</SubText>
                    <SubText>Tech // Developer</SubText>
                </LeftStikkerCenterSticker>
                <SocialMedia>
                    <UlSoMe>
                        <LiSoMe><SoMeIcon></SoMeIcon></LiSoMe>
                        <LiSoMe><SoMeIcon></SoMeIcon></LiSoMe>
                        <LiSoMe><SoMeIcon></SoMeIcon></LiSoMe>
                        <LiSoMe><SoMeIcon></SoMeIcon></LiSoMe>
                    </UlSoMe>
                </SocialMedia>
                <AnimationZone></AnimationZone>
            </Content>
        </Container>
    )

}

export default VideoBanner