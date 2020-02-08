import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components';
import Layout from "../components/layout"
import Header from '../components/header'
import Video from '../components/video'

const Container = styled.div ` 
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
    "header header  header header"
    "video video video video"
    "portfolio portfolio portfolio portfolio"
    "projectDescription projectDescription projectDescription projectDescription"
    "footer footer footer footer";
`

const CoverVideo = styled.div ` 
    grid-area: video;
    width: vw;
    height: 90vh;
    margin: 20px;
    background-image:  url(${props => props.img});
    background-size: cover;

`


const Description = styled.div ` 
    grid-area: projectDescription;
    width: vw;
    height: 40vh;

    padding: 50px;
   

`

const projectPage = ({location}) => {
    
    const project = location.state
    return(
        <Layout>
            <Container>
                <Header></Header>
                <CoverVideo img= {project?.img}>
                    <Video videoSrcURL= {project?.url}  videoTitle="Official Music Video on YouTube" ></Video>
                </CoverVideo>
                <Description>
                    <h1>Hello {project?.title}</h1>
                    <p>Some shit</p>
                </Description>
            </Container>
        </Layout>
    )
}


export default projectPage
