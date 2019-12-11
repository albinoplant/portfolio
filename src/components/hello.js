import React, {useState} from 'react';
import './hello.scss'

import HiCloud from '../graphics/hi-cloud';
import cv from '../graphics/cv_eng.pdf';
import Blob from '../graphics/blob';
import BlobWide from '../graphics/blob-wide';
import Contact from './contact';

const BottomBorder = () =>(
<svg className="wave" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path  fillOpacity="1" d="M0,160L60,149.3C120,139,240,117,360,106.7C480,96,600,96,720,117.3C840,139,960,181,1080,208C1200,235,1320,245,1380,250.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
);


const Hello = () => {
   
    const [isClicked, setClicked] = useState(false);
    
    const ContactMeClickHandle = () => {
        setClicked(!isClicked);
    }

    const PopupWindowContact = () => {
        
        if(isClicked) {
            return (
                <aside className='popup-window-contact'>
                    <div className='popup-container'>
                        <Blob/>
                        <Contact/>
                    </div>
                </aside>
            );
        } else {
            return null;
        } 
    }


    return(
        <section  className='hello-section' id="hello-section">
            <article> 
                <div className='main-container'>
                    <HiCloud/>
                    <h1>My name is <span>Mateusz Małecki</span></h1>
                    <p>I am looking for a first job as junior web developer</p>
                    <p>in Szczecin, Poland</p>
                    <button className='download' ><a style={{textDecoration:'none', }} href={cv} target='_blank' rel="noopener noreferrer" download>Download CV</a></button>
                    <button onClick={ContactMeClickHandle}  className='contact'>Contact Me</button>
                </div>
                <PopupWindowContact />
                <BlobWide/>
            </article>
            <BottomBorder/>
        </section>
    );
}
export default Hello;