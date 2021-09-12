
import service from '../assets/images/services/miercoles.jpeg'
import service2 from '../assets/images/services/viernes.jpeg'
import service3 from '../assets/images/services/domingo.jpeg'
import { ServicesContainer } from '../styles/components/services.styled'


const ServicesBanner = () => {
    return (
        <ServicesContainer className="services__container">
            <ul>
                <li>
                    <div className="service__element" >
                        <img src={service} alt="" />
                        <div className="text__container">
                            <p className='title'>Miércoles</p>
                            <p className='subtitle'>Formación y Crecimiento espiritual</p>
                            <p className='subtitle'>7:30 pm</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="service__element" >
                        <img src={service2} alt="" />
                        <div className="text__container">
                            <p className='title'>Viernes</p>
                            <p className='subtitle'>Oración</p>
                            <p className='subtitle'>7:30pm </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="service__element">
                        <img src={service3} alt="" />
                        <div className="text__container">
                            <p className='title'>Domingo</p>
                            <p className='subtitle'>Servicio de Adoración</p>
                            <p className='subtitle'>10:00 am y 12:00 pm</p>
                        </div>
                    </div>
                </li>
            </ul>
        </ServicesContainer>
    )
}

export default ServicesBanner
