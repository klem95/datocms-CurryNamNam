import React from "react";
import styled from 'styled-components';
import Header from '../components/header'
import Footer from '../components/footer'

const Layout = (props) => {
  return (
    <> 
        {props.children}
      <Footer/>
    </>
  )
}

export default Layout