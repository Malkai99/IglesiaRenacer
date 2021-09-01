import React from 'react'
import ChannelYT from '../components/youtube/ChannelYT'
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    width: 100%;
    padding-top: 100px;
    margin-bottom: 80px;
`;

const Media = () => {

    return (
        <Container>
            <h2>Descubre nuestra Multimedia</h2>
            <ChannelYT />
        </Container>
    )
}

export default Media
