import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components';
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"


//////////////  Custome Components //////////////
import VideoBanner from '../components/video-banner'
import Portfolio from '../components/portfolio'
import AboutMe from '../components/about-me'
import SkillUniverse from '../components/skill-universe'


import "../styles/custome/config.sass"

///////////////////////////////////////////////

//////////////  Styled Components //////////////
const Container = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header  header header"
    "video video video video"
    "portfolio portfolio portfolio portfolio"
    "aboutMe aboutMe aboutMe skillUniverse"
    "footer footer footer footer";
`

const IndexPage = ({ data }) => (
  <Container>
    <Layout>
      <VideoBanner></VideoBanner>
      <Portfolio></Portfolio>
      <AboutMe></AboutMe>
      <SkillUniverse></SkillUniverse>
    </Layout>
  </Container>
)
///////////////////////////////////////////////


export default IndexPage

export const query = graphql`
  query indexQueryAndIndexQuery  {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
