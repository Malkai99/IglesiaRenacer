import React from 'react'
import styled from 'styled-components';
import image from '../assets/service-min.jpg'

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

const BackImportant = () => {
    return (
        <Container>
            <h2>Volviendo a casa</h2>
            <BackgroundContainer className="banner__container" >
                <img src={image} className="image__container"></img>
            </BackgroundContainer>
            <TextContainer>
                <p>
                    El nombre de nuestra congregación tiene una estrecha relación con el llamado que recibimos de parte 
                    de nuestro Señor y nuestra forma de hacer iglesia.
                </p>
                <p>
                    Creemos que muchas de las áreas que se han roto en nuestra vida no se pueden 
                    arreglar con un parche o un curita, sino que necesitan volver a ser 
                    hechas por las manos de Dios, para recuperar el propósito original para el que 
                    fueron creadas.
                </p>
                <p>
                    Renacer cada día en el propósito y la voluntad de nuestro Creador es la clave de la vida cristiana.
                    Desde el domingo 19 de mayo del año 2013 nuestro llamado de parte de Dios ha sido 
                    el mismo, volver a lo que realmente es importante.
                </p>
                <p>
                    Olvidarnos de la tradición o los vicios que como creyentes vamos sumando en el 
                    trayecto de nuestra vida y enfocarnos en el corazón de Dios, en los planes que 
                    tiene para sus hijos y en encontrar la manera de agradarlo con nuestra adoración 
                    y servicio.
                </p>
                
                
            </TextContainer>
        </Container>
    )
}

export default BackImportant
