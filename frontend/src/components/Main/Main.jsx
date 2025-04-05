import { FaStar, FaRegHeart, FaWifi,FaCar } from 'react-icons/fa6';
import { MdAccessible } from "react-icons/md";
import { MdOutlineChildCare } from "react-icons/md";

import './Main.scss';


export default function Main() {

  return (
    <>
      <main className="home container">
          <picture className='banner-container'>
            <img src="./banner.png" alt="" />
          </picture>
          <section className="section-store">
            <div className='content'>
            <div className="store">
              <picture className="logo-container">
                <img src="./barbearia.png" alt="" />
              </picture>
              <div className="store-infos">
                <h1>BarberStore</h1>
                <span className='store-rate'>
                  5.0<b className='svg'> <FaStar /></b>
                </span>
              </div>
              
            </div>
            
            <div className="store-menu">
              <button className="like-button">
                <FaRegHeart />
              </button>
              <a className="btn-barber" href="">
                Agendar agora
              </a>
            </div>
            </div>
           <nav className='store-nav'>
            <ul className='services-list'>
              <li className='service-item'>Serviços</li>
              <li className='service-item'>Profissionais</li>
              <li className='service-item'>Sobre</li>
              <li className='service-item'>Fidelidades</li>
              <li className='service-item'>Produtos</li>
              <li className='service-item'>Assinaturas</li>
              <li className='service-item'>Avaliações</li>
            </ul>
           </nav>
           <p className='store-description'>Barbearia por assinatura. Lorem ipsum dolor sit amet.</p>

           <section className='amenities'>
            <h2 className='title'>Comodidades</h2>
            <p>
              Clique no item para obter informações
            </p>

            <ul className='amenities-list'>
              <li className='amenity-item'>
                <span className='icon'><FaWifi/></span>
                Wi-fi
              </li>
              <li className='amenity-item'>
                <span className='icon'><FaCar/></span>
              Estacionamento
              </li><li className='amenity-item'>
                <span className='icon'><MdAccessible/></span>
                Acessibilidade
              </li><li className='amenity-item'>
                <span className='icon'><MdOutlineChildCare/></span>
                Atende crianças
              </li>
            </ul>
           </section>
            
          </section>
          
         
      </main>
    </>
  );
}
