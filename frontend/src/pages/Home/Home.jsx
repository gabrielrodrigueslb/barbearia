import { useContext } from 'react';
import { ThemeContext } from '../../themes/ThemeContext';
import Header from '../../components/Header/Header';

import './Home.scss';
import Main from '../../components/Main/Main';
import DetailStore from '../../components/DetailStore/DetailStore';

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <Header switchTheme={toggleTheme} actualTheme={theme} />
      <main className="cntr-1">
        <Main />
        <DetailStore/>
      </main>
    </>
  );
}
