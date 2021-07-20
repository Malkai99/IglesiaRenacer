import { useEffect } from 'react';
import Head from './components/head/Head'
import './App.css';
import logo from './assets/logo-renacer.png';
import slide from './assets/slide_home.jpg';
import slide2 from './assets/slide.jpg'
import Facebook from './assets/svgs/facebook'
import Instagram from './assets/svgs/instagram'
import Youtube from './assets/svgs/youtube'
import ServicesBanner from './components/ServicesBanner'
import Contact from './components/Contact'

const App = () => {

  useEffect(() => {
    document.querySelector('.letter__animations').classList.add('running')
  }, []);

  function overLink(event){
    console.log('selected ', event.currentTarget)
    if(event.currentTarget.classList.contains('hover')){
      event.currentTarget.classList.remove('hover')
    }else{
      event.currentTarget.classList.add('hover')
    }
  }

  return (
    <div className="App">
      <Head />
      <header className="header__container">
        <div className="logo__container">
          <img src={logo} alt="" />
        </div>
        <ul className='header__links'>
          <li><a ><p onMouseOver={(e) => overLink(e)} onMouseLeave={(e) => overLink(e)}>Estos Somos</p></a></li>
          <li><a><p onMouseOver={(e) => overLink(e)} onMouseLeave={(e) => overLink(e)}>Busco Iglesia</p></a></li>
          <li><a><p onMouseOver={(e) => overLink(e)} onMouseLeave={(e) => overLink(e)}>Escuchanos</p></a></li>
          <li><a><p onMouseOver={(e) => overLink(e)} onMouseLeave={(e) => overLink(e)}>Contactanos</p></a></li>
        </ul>
        <div className="session__container">
          <p>Ingresa</p>
        </div>
      </header>
      
      {/*BACKGROUND  */}
      <div className="banner__container" >
        <div className="image__container" style={{backgroundImage: `url(${slide})`}}></div>
      </div>
      
      {/* LETTER ANIMATION */}
      <div className="letter__animations">
        <p>Iglesia Renacer</p>
      </div>

      {/* STORYTELLING */}
      <div className="storytelling__container">
        <q>Renacer existe para que en medio de una atmosfera de fe, cada persona pueda conocer el plan divino para su vida.</q>
      </div>

      {/*BACKGROUND  */}
      {/* <div className="banner__container image__flat" >
        <div className="image__container" style={{backgroundImage: `url(${slide2})`}}></div>
      </div> */}

      {/* Banner servicios */}
      <ServicesBanner />

      {/* Contactanos */}
      <Contact />

      {/* SOCIALS */}
      <div className="social__container">
          <ul className='content__elements'>
            <li className='facebook__container'>
              <a href="https://www.facebook.com/RenacerSaltillo" target='_blank'>
                <Facebook fill={'white'} width={'30px'} />
              </a>
            </li>
            <li className='instagram__container'>
              <a href="https://www.instagram.com/renacersaltillo" target='_blank'>
                <Instagram fill={'white'} width={'30px'} />
              </a>
            </li>
            <li className='youtube__container'>
              <a href='https://www.youtube.com/IglesiaRenacerSaltillo' target='_blank'>
                <Youtube fill={'white'} width={'30px'} />
              </a>
            </li>
          </ul>
        </div>
      <footer>
        <div className="footer__container">
          <p>Iglesia Renacer Saltillo</p>

        </div>
      </footer>
    </div>
    
  );
}

export default App;
