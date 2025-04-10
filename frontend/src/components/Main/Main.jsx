import { FaStar, FaRegHeart, FaWifi,FaCar } from 'react-icons/fa6';
import { FaSearch } from "react-icons/fa";

import { MdAccessible } from "react-icons/md";
import { MdOutlineChildCare } from "react-icons/md";
import AmenityCard from '../AmenityCard/AmenityCard';

import './Main.scss';
import CardService from '../CardService/CardService';


export default function Main() {

  return (
    <>
      <main className="home container">
          <picture className='banner-container'>
            <img src="./banner.png" alt="banner da barbearia" />
          </picture>
          <section className="section-store">
            <div className='content'>
            <div className="store">
              <picture className="logo-container">
                <img src="./barbearia.png" alt="Logo barbearia" />
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
              <AmenityCard icon={FaWifi} title="Wi-Fi" situation="active" />
              <AmenityCard icon={FaCar} title="Estacionamento"
              situation="active"/>
              <AmenityCard icon={MdAccessible} title="Acessibilidade" situation="inactive"/>
              <AmenityCard icon={MdOutlineChildCare} title="Atende crianças" situation="active"/>
            </ul>
           </section>
            
          </section>

          <section className='service'>
            <h2 className='title'>
              Serviços
              </h2>
              <div className='searchbar'>
                <button><FaSearch/></button>
                <input type="text" placeholder="Pesquisar"/>
              </div>
              <p>Categorias</p>

              <ul className='category-list'>
                <li className='category'>Combos</li>
                <li className='category'>
                  Serviços extras
                </li>
              </ul>

              <ul className='services-list'>
                <CardService/>
                 <CardService/>
                 
              </ul>
            
          </section>
          
         
      </main>
    </>
  );
}
