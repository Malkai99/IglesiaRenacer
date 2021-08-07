import React from 'react'
import Head from './head/Head'
import Footer from './Footer'
import styled from 'styled-components';

const LayoutContainer = styled.div`
`;

const Layout = ({ children }) => {
    return (
        <LayoutContainer>
            <Head />
            { children }
            <Footer />
        </LayoutContainer>
    )
}

export default Layout
