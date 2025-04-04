import { ThemeProvider } from './themes/ThemeContext'
import Home from './pages/Home/Home'
import './App.scss'

function App() {

  return (
    <ThemeProvider>
      <Home/>
    </ThemeProvider>
  )
}

export default App
