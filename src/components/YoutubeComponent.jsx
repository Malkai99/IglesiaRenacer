import React from 'react'
import styled from 'styled-components';
import { device } from '../styles/utilities/media_queries.styled';

const EmbedContainer = styled.div`
    position: relative;
    width: auto;
    height: 350px;
    padding: 5%;
    @media ${device.sm}{
        height: 400px;
    }
    @media ${device.md}{
        height: 450px;
    }
    @media ${device.lg}{
        height: 600px;
    }
    @media ${device.xlg}{
        height: 800px;
    }
    
`;

const YoutubeComponent = ({ embedId }) => {
    return (
        <EmbedContainer>
            <iframe src={`https://www.youtube.com/embed/${embedId}`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </EmbedContainer>
    )
}

export default YoutubeComponent
