import { FiSun, FiMoon } from "react-icons/fi"
import { IoPersonCircleOutline } from "react-icons/io5";
import './Header.scss';

export default function Header({switchTheme, actualTheme}) {
  return (
    <header className="header">
        <nav className='navbar'>
          <p>logo</p>
          <ul>
            <li>Início</li>
            <li>Buscar</li>
            <li>Meus Agendamentos</li>
               </ul>
        </nav>

        <nav className='navbar login'>
            <button onClick= {switchTheme}  className='theme-button'>{actualTheme == 'light' ? <FiMoon /> : <FiSun />}</button>
            <a className="login-btn" href=""> <IoPersonCircleOutline />Entrar</a>
        </nav>
      </header>
  )
}
