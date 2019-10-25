import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';
import './App.scss';
import Logo from './data/portfolio-icon';
import About from './components/about';
import Projects from './components/projects';
import Hallo from './components/hallo';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: window.location.pathname
    }
  }

  componentDidMount(){
    document.addEventListener('click',() => {
      this.setState({location:window.location.pathname
      })
    });
  }

  setLocation() {
    this.setState({
      location : window.location.pathname
    });
  }



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
            <Link onFocus={handleLeftFocus} to="/projects"><button  id="main-button-1">PROJECTS</button></Link>
            <Link onFocus={handleRightFocus} to="/about"><button id="main-button-2">ABOUT</button></Link>
            <div className="selected">
              <div id="slider"></div>
            </div>
          </nav>
        </header>
        <main >
          <Route exact path="/" component={Hallo} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
        </main>
      </div>
    );
  }
}

