import { FaRegClock } from "react-icons/fa";


import './CardService.scss'

export default function CardService() {
  return (
    <li className='service-card'>
        <div className='service-content'>
        <div className='service-icon'>
        <span className='icon'></span>
        </div>
            <div className="service-info">
                <h3 className='title'>Barba executiva</h3>
                <p className='description'>Uma barboterapia completa, com tratamento para a pele e fios, aplicação de toalha quente relaxante e massagem.</p>
                <footer className="footer-infos">

                <span className='price'>R$40,00</span>
                <span className='duration'><FaRegClock /> 10 min</span>
                </footer>
            </div>
        </div>
            <a href="" className="service-button">Agendar</a>

    </li>
  )
}
