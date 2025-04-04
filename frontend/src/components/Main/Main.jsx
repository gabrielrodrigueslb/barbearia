import { FaStar, FaRegHeart } from 'react-icons/fa6';

import './Main.scss';

export default function Main() {
  return (
    <>
      <main>
        <div className="container">
          <picture className='banner-container'>
            <img src="./banner.png" alt="" />
          </picture>
          <section className="section-store">
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
          </section>
        </div>
      </main>
    </>
  );
}
