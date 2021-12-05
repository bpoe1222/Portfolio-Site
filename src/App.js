import './index.scss'
import Nav from './components/nav/Nav'
import Aboutme from './components/aboutme/Aboutme'
import Portfolio from './components/portfolio/Portfolio'
import Contactme from './components/contactme/Contactme'
import Menu from './components/menu/Menu'
import {useState} from 'react'
import Resume from './components/resume/Resume'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className='sections'>
        <Aboutme />
        <Portfolio />
        <Resume />
        <Contactme />
      </div>
    </div>
  );
}

export default App;
