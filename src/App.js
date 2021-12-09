
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home'
import About from './components/About'
import Music from './components/Music';
import Bio from './components/Bio';
import Events from './components/Events';
import Contact from './components/Contact';

const App = () => (
  <div className='app'>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/music' element={<Music />} />
        <Route path='/bio' element={<Bio />} />
        <Route path='/events' element={<Events />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </div>
)

export default App;
