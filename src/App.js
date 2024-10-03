import logo from './logo.svg';

import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Exp from './Components/Exp';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

function App() {
  return (
    <>
    <div className='main'>
      <NavBar/>
      
        <Home id="home"/>
        <div className="b-example-divider"></div>
        <Projects id="project"/>
        <div className="b-example-divider"></div>
        <Exp id="exp" />
        <div className="b-example-divider"></div>
        <Skills id="skill"/>
        <div className="b-example-divider"></div>
      <Contact id="contact"/>
      <div className="b-example-divider"></div>
      <Footer/>
    </div>
    </>
  );
}

export default App;
