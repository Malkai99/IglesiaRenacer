import React, { useEffect } from 'react'
import webelieveimg from '../assets/images/webelieve/webelieve1.jpg'
import { Container, Intro, Wrapper, TextContainer, TitleContainer,
        ListContainer, BackgroundContainer, LettersAnimation } from '../styles/pages/webelieve.styled'


const WeBelieve = () => {

    useEffect(() => {
        document.querySelector('.letter__animations').classList.add('running')
        document.querySelector('.intro').classList.add('visible')
      },);

    return (
        <Container>
            <Intro>
                <BackgroundContainer className="banner__container" >
                    <div className="background"></div>
                    <img src={webelieveimg} className="image__container"></img>
                    <TextContainer className='intro'>
                        <q>
                            Renacer es una iglesia para todos, dependiente de la gracia divina, genuina,
                            respetuosa, cercana a la gente, apasionada por la adoración, con una atmósfera
                            de fe y libertad. Sin denominación, contemporánea, centrada en Jesús, pentecostal,
                            expectante a la voz de Dios, comprometida con la enseñanza de toda la biblia
                            y con una predicación inspirada y desafiante.
                        </q>
                    </TextContainer>
                </BackgroundContainer>
                <LettersAnimation className="letter__animations">
                    <p>Creemos</p>
                </LettersAnimation>

            </Intro>

            <Wrapper>
                <TextContainer>
                    <p>
                        <span>Creemos</span> en un solo Dios, eterno, amoroso, santo y creador de todo lo que existe:
                        Dios Padre, Dios Hijo y Dios Espíritu Santo.
                    </p>
                </TextContainer>
                <TextContainer>
                    <p>
                        <span>Creemos</span> que la Biblia es la Palabra de Dios, que está vigente, tiene autoridad
                        y es aplicable a nosotros.
                    </p>
                </TextContainer>
                <TextContainer>
                    <p>
                        <span>Creemos</span> que el pecado nos ha separado de Dios y de su propósito para nuestras vidas.
                    </p>
                </TextContainer>
                <TextContainer>
                    <p>
                        <span>Creemos</span> que el Señor Jesucristo, por su sacrificio en la cruz, es el único que nos
                        puede reconciliar con Dios. Él es el Hijo de Dios que se humanó por amor a nosotros,
                        vivió una vida sin pecado, murió ocupando nuestro lugar y se levantó de la tumba para
                        darnos vida eterna.
                    </p>
                </TextContainer>
                <TextContainer>
                    <p>
                        <span>Creemos</span> que nuestro destino eterno, cielo o infierno, es determinado por nuestra
                        respuesta al Señor Jesucristo.
                    </p>
                </TextContainer>
                <TextContainer>
                    <p>
                        <span>Creemos</span> que para tener la plenitud de vida que Cristo nos promete,
                        debemos renunciar a gobernar nuestra vida y someternos a la voluntad de su señorío.
                    </p>
                </TextContainer>
                <TextContainer>
                    <p>
                        <span>Creemos</span> que para cumplir el deseo de Dios de llevarnos en santidad y bendición es
                        imprescindible nuestra dependencia a su presencia. El Espíritu Santo fue derramado
                        sobre la iglesia primitiva y continúa en nuestros días la plenitud de su obra:
                        Guía, consuela y empodera al creyente.
                    </p>
                </TextContainer>
                <TextContainer>
                    <p>
                        <span>Creemos</span> que la obra de Jesús se recibe por gracia, nunca por méritos o acciones humanas,
                        sino por la misericordia de Dios. Nuestro mensaje es de segundas oportunidades,
                        donde esa gracia alcanza y restaura a todos.
                    </p>
                </TextContainer>
                <TextContainer>
                    <p>
                        <span>Creemos</span> que Dios quiere sanarnos integralmente y que tiene el poder para regresar
                        a la salud nuestro cuerpo, alma, y mente.
                    </p>
                </TextContainer>
                <TextContainer>
                    <p>
                        <span>Creemos</span> en el poder y la importancia de la Iglesia para suplir la necesidad de
                        los creyentes de pertenecer a una familia de fe donde puedan vivir la comunión,
                        oración, enseñanza y partimiento del pan.
                    </p>
                </TextContainer>

                <TextContainer>
                    <p>
                        <span>Creemos</span> que Dios nos ha equipado individualmente para que podamos alcanzar su propósito
                        para nuestras vidas, el cual es adorarle, servir en la iglesia, aportar para su obra,
                        bendecir a la comunidad y compartir el mensaje de Jesús.
                    </p>
                </TextContainer>
                <TextContainer>
                    <p>
                        <span>Creemos</span> que el Señor Jesucristo volverá por su iglesia, como él prometió,
                        para morar eternamente con él.
                    </p>
                </TextContainer>

            </Wrapper>
            
            <Wrapper>
                <TitleContainer>Principios: </TitleContainer>
                <ListContainer>
                    <li>
                        Vemos la unidad entre hermanos como el poderoso canal que hace llegar a
                        nuestra congregación el aliento y la salud que sustenta el proyecto del
                        cielo en el hombre.
                    </li>
                    <li>
                        Creemos que el servicio cristiano no es opcional. En nuestra congregación
                        provocamos oportunidades para que cada persona pueda servir a Dios y a sus
                        hermanos con lo que es y lo que tiene, ya que estamos convencidos que
                        alimentarse sin servir y servir sin alimentarse siempre limitará el crecimiento
                        cristiano.
                    </li>
                    <li>
                        Diferimos con la idea que relacionarse con Dios suponga monotonía.
                        Somos conscientes que conectarse con el Dios del universo resulta apasionante
                        cuando nuestro ser se vuelca en adoración fresca.
                    </li>
                    <li>
                        Consideramos el amor palpable entre los creyentes la mejor expresión de la
                        obra que Cristo ha hecho en nuestras vidas. Es el amor que recibimos de Dios
                        el que nos permite mantener relaciones afectivas, relevantes e incluyentes.
                    </li>
                    <li>
                        Estamos convencidos que un cristianismo responsable es aquel que sigue los
                        baluartes que Jesús estableció, por eso en nuestra iglesia vivimos aprovechando
                        cada oportunidad de dar, orar y ayunar.
                    </li>
                </ListContainer>
            </Wrapper>
        </Container>
    )
}

export default WeBelieve
