import React from 'react'
import Head from './head/Head'
import Footer from './Footer'
import styled from 'styled-components';
import Header from '../components/Header'

const LayoutContainer = styled.div`
`;

const Body = styled.div`
  
`;

const Layout = ({ children }) => {
    return (
        <LayoutContainer>
            <Head />
            <Body className='body'>
                <Header />
                { children }
            </Body>
            {/* <Footer /> */}
        </LayoutContainer>
    )
}

export default Layout
