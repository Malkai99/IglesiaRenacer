import React from 'react'
import styled from 'styled-components';
import image from '../assets/banner_img.jpeg'

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 100px 0;
`;

const BackgroundContainer = styled.div`
  position: relative;
  top: 0;
  width: 90%;
  height: auto;
  z-index: 1;
  background-color: #282c34;
  margin: 0 auto;
  .image__container{
    position: relative;
    width: 100%;
    height: 400px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    object-fit: contain;
  }
`;

const TextContainer = styled.div`
    position: relative;
    width: 85%;
    margin: 30px auto;
    text-align: left;
    p{
        font-size: 22px;
    }
`;

const SearchChurch = () => {
    return (
        <Container>
            <h2>Busco Iglesia</h2>
            <BackgroundContainer className="banner__container" >
                <img src={image} className="image__container"></img>
            </BackgroundContainer>
            <TextContainer>
                <p>
                    En Renacer estamos preocupados por el bienestar espiritual de nuestra comunidad, 
                    si por alguna razón no tienes casa espiritual, considéranos tu familia. 
                </p>
                <p>
                    En nuestra iglesia oramos y trabajamos por el crecimiento integral de cada persona, 
                    a través de reuniones de oración, cursos de crecimiento y formación espiritual, 
                    discipulados intensivos y reuniones de adoración. Buscamos que la Palabra y la
                    Presencia de Dios nos abrace y levante.
                </p>
                
                
            </TextContainer>
        </Container>
    )
}

export default SearchChurch
