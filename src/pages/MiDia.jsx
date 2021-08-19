import React from 'react'
import ChannelYT from '../components/youtube/ChannelYT'
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    width: 100%;
    padding-top: 100px;
    margin-bottom: 80px;
`;

const MiDia = () => {

    return (
        <Container>
            <h2>Bienvenidos a Mi Dia</h2>
            <ChannelYT />
        </Container>
    )
}

export default MiDia
