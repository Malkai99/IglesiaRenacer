import React from 'react'
import styled from 'styled-components';
import { device } from '../styles/utilities/media_queries.styled';

const EmbedContainer = styled.div`
    position: relative;
    width: 90%;
    height: 350px;
    @media ${device.sm}{
        width: 100%;
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
    &.video__grid{
        height: 350px;
    }
    
`;

const YoutubeComponent = ({ embedId, className }) => {
    return (
        <EmbedContainer className={className}>
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
