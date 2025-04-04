import { BsCursorFill } from 'react-icons/bs';
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaEarthAmericas,FaPhone 
} from 'react-icons/fa6';
import { MdSmartphone } from 'react-icons/md';
import './DetailStore.scss';

export default function DetailStore() {
  return (
    <>
      <aside className="detail-store">
        <section className="local section">
          <h3 className="title">Localização</h3>
          <div className="adress">
            <p>
              Rua José de Vasconcelos Costa , 43 - 32223- 350 Industrial -
              Contagem/MG
            </p>
            <button className="local-button">
              <BsCursorFill />
            </button>
          </div>
        </section>
        <section className="service section">
          <h3 className="title">Horário de atendimento</h3>
          <ul className="days">
            <li className="day">
              <p>Domingo</p>
              <span>08:00 - 12:30</span>
            </li>
            <li className="day">
              <p>Segunda-feira</p> <span>08:00 - 18:00</span>
            </li>
            <li className="day">
              <p>Terça-feira</p> <span>08:00 - 18:00</span>
            </li>
            <li className="day">
              <p>Quarta-feira</p>
              <span>08:00 - 18:00</span>
            </li>
            <li className="day">
              <p>Quinta-feira</p>
              <span>08:00 - 18:00</span>
            </li>
            <li className="day">
              <p>Sexta-feira</p>
              <span>08:00 - 17:00</span>
            </li>
          </ul>
        </section>
        <section className="payment-methods section">
          <h3 className="title">Formas de pagamento</h3>
          <ul className="payment-methods-list">
            <li className="payment-method">Cartão de crédito</li>
            <li className="payment-method">Cartão de débito</li>
            <li className="payment-method">Dinheiro</li>
            <li className="payment-method">Pix</li>
          </ul>
        </section>
        <section className="social-medias section">
          <h3 className="title">Redes sociais</h3>
          <ul className="social-medias-list">
            <li className="social-media">
              <FaInstagram />
            </li>
            <li className="social-media">
              <FaFacebook />
            </li>
            <li className="social-media">
              <FaWhatsapp />
            </li>
            <li className="social-media">
              <FaEarthAmericas />
            </li>
          </ul>
        </section>
        <section className="contact section">
          <h3 className="title">Contato</h3>
          <ul className="contact-list">
            <li className="contact">
              <span className="icon">
                <FaPhone />
              </span>
              (31) 1234-5678
            </li>
            <li className="contact">
              <span className="icon">
                <MdSmartphone />
              </span>
              (31) 12345-6789
            </li>
          </ul>
        </section>
      </aside>
    </>
  );
}
