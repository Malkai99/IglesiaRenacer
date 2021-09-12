import React,{ useEffect } from 'react'
import image from '../assets/service-min.jpg'
import { Container, BackgroundContainer, TextContainer, LettersAnimation, Intro } from '../styles/pages/backImportant.styled'


const BackImportant = () => {
    useEffect(() => {
        document.querySelector('.letter__animations').classList.add('running')
        document.querySelector('.intro').classList.add('visible')
      },[]);

    return (
        <Container>
            <Intro>
                <BackgroundContainer className="banner__container" >
                    <div className="background"></div>
                    <img src={image} className="image__container"></img>
                    <TextContainer className='intro'>
                        <q>
                            El nombre de nuestra congregación tiene una estrecha relación con el llamado que recibimos de parte 
                            de nuestro Señor y nuestra forma de hacer iglesia.
                        </q>
                    </TextContainer>
                </BackgroundContainer>
                <LettersAnimation className="letter__animations">
                    <p>Volviendo a casa</p>
                </LettersAnimation>
            </Intro>

            <TextContainer>
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
