import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';
import './App.scss';
import Logo from './graphics/portfolio-icon';
import About from './components/about';
import Projects from './components/projects';
import Hello from './components/hello';


export default class App extends Component {


  render() {
      
    const handleLeftFocus = (e) => {
      e.preventDefault();
      const selected = document.getElementById('slider');      
      selected.style.marginLeft = '0';
      //selected.style.height = '100%';
    }
  
    const handleRightFocus = (e) => {
      e.preventDefault();
      const selected = document.getElementById('slider');
      selected.style.marginLeft = '50%';
     // selected.style.height = '100%';
    } 
    
    const handleMainFocus = (e) => {
      e.preventDefault();
      const selected = document.getElementById('slider');
      //selected.style.height = '100%';
      selected.style.marginLeft = '-50%';
    }


    return (
      <div className="App">
        <div className="top-nav"></div>
        <header className="header-main">      
          <nav>
            <Link onFocus={handleMainFocus} to="/"><Logo/></Link> 
            <Link onFocus={handleLeftFocus} to="/projects"><button  id="main-button-1"><span>PROJECTS</span></button></Link>
            <Link onFocus={handleRightFocus} to="/about"><button id="main-button-2"><span>ABOUT</span></button></Link>
            <div className="selected">
              <div id="slider"></div>
            </div>
          </nav>
        </header>
        <main>
          <Route exact path="/" component={Hello} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
        </main>
      </div>
    );
  }
}

