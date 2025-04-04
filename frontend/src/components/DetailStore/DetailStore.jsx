import { BsCursorFill } from 'react-icons/bs';
import './DetailStore.scss';

export default function DetailStore() {
  return (
    <>
      <aside className="detail-store">
        <div className="local section">
          <h3 className='title'>Localização</h3>
          <div className='adress'>
            <p>
              Rua José de Vasconcelos Costa , 43 - 32223- 350 Industrial -
              Contagem/MG
            </p>
            <button className="local-button">
              <BsCursorFill />
            </button>
          </div>
        </div>
        <div className="service section">
          <h3 className='title'>Horário de atendimento</h3>
          <ul className='days'>
            
            <li className='day'><p>Domingo</p>: <span>08:00 - 12:30</span></li>
            <li className='day'><p>Segunda-feira</p>: <span>08:00 - 18:00</span></li>
            <li className='day'><p>Terça-feira</p>: <span>08:00 - 18:00</span></li>
            <li className='day'><p>Quarta-feira</p>: <span>08:00 - 18:00</span></li>
            <li className='day'><p>Quinta-feira</p>: <span>08:00 - 18:00</span></li>
            <li className='day'><p>Sexta-feira</p>: <span>08:00 - 17:00</span></li>
          </ul>
        </div>
      </aside>
    </>
  );
}
