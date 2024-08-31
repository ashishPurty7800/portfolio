// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import ProjectSection from './components/ProjectSection/ProjectSection';
import SkillContainer from './components/SkillContainer/SkillContainer';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Navbar />} />
      </Routes>
      <div
        className='nav_Line'
      >                    
      </div>
      <Routes>
          <Route path='/' element={<HeroSection/>} />
      </Routes>

      <Routes>
        <Route path='/' element={<ProjectSection />} />
      </Routes>

      <Routes>
        <Route path='/' element={<SkillContainer />} />
      </Routes>

      <Routes>
        <Route path='/' element={<Contact />} />
      </Routes>

      <Routes>
        <Route path='/' element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
