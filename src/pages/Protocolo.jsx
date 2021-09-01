import React from 'react'
import styled from 'styled-components';
import image from '../assets/protocoloCovid__compress.jpg'

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

const Protocolo = () => {
    return (
        <Container>
            <h2>Protocolo covid</h2>
            <BackgroundContainer className="banner__container" >
                <img src={image} className="image__container"></img>
            </BackgroundContainer>
            <TextContainer>
                <p>
                En Renacer contamos con todas las medidas de higiene y seguridad para que tú y tus acompañantes estén seguros y tranquilos durante cada momento de la reunión.
                <br/>
                Favor de tomar en cuenta las siguientes regulaciones. ¡Recuerda que juntos nos cuidamos mejor!
                </p>
                <ul>
                    <li>Usa tu cubrebocas en todo momento.</li>
                    <li>Mantén una sana distancia.</li>
                    <li>Evita saludar de mano, abrazo o beso.</li>
                    <li>Usa el asiento asignado por nuestro equipo.</li>
                </ul>
                
            </TextContainer>
        </Container>
    )
}

export default Protocolo
