import React from 'react';
import { Link, Route } from 'react-router-dom';
import './App.scss';
import Logo from './data/portfolio-icon';
import About from './components/about';
import Contact from './components/projects';
import Hallo from './components/hallo';


function App() {
  
  function handleLeftFocus(e) {
    e.preventDefault();
    const selected = document.getElementById('slider');      

    selected.style.marginLeft = '0';
    selected.style.height = '100%';
    }
  
    function handleRightFocus(e) {
      e.preventDefault();
      const selected = document.getElementById('slider');

      selected.style.marginLeft = '50%';
      selected.style.height = '100%';
    } 
    
    function handleMainFocus(e) {
      e.preventDefault();
      const selected = document.getElementById('slider');

      selected.style.height = '0';
    }

  return (
    <div className="App">
      <div className="top-nav"></div>
      <header className="header-main">      
        <nav>
          <Link onFocus={handleMainFocus} to="/"><Logo/></Link> 
          <Link onFocus={handleLeftFocus} to="/projects"><button  id="main-button-1">PROJECTS</button></Link>
          <Link onFocus={handleRightFocus} to="/about"><button id="main-button-2">ABOUT</button></Link>
          <div className="selected">
            <div id="slider"></div>
          </div>
        </nav>
      </header>
      <main>
        <Route exact path="/" component={Hallo} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </main>
    </div>
  );
}

export default App;
