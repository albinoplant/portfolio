import React, {Component} from 'react';
import { Link, Route,Switch } from 'react-router-dom';
import './App.scss';
import Logo from './graphics/portfolio-icon';
import About from './components/about';
import Projects from './components/projects';
import Hello from './components/hello';


export default class App extends Component {


  render() {
    
    //Makes the slider go under logo 
    const handleLeftFocus = (e) => {
      e.preventDefault();
      const selected = document.getElementById('slider');      
      selected.style.marginLeft = '0';
      //selected.style.height = '100%';
    }
  
    //slider goes 
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
            <span onClick={handleMainFocus}><Link to="/"><Logo/></Link></span> 
            <span onClick={handleLeftFocus}><Link  to="/projects"><button  id="main-button-1"><span>PROJECTS</span></button></Link></span>
            <span onClick={handleRightFocus}><Link to="/about"><button id="main-button-2"><span>ABOUT</span></button></Link></span>
            <div className="selected">
              <div id="slider"></div>
            </div>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Hello} />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
          </Switch>  
        </main>
      </div>
    );
  }
}

