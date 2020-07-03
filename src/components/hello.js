import React, {useState} from 'react';
import './hello.scss'

import HiCloud from '../graphics/hi-cloud';
import cv from '../graphics/Mateusz_Małecki.pdf';
import BlobWide from '../graphics/blob-wide';
import BottomBorder from '../graphics/bottom-border';
import PopupWindowContact from './PopupWindowContact';


const Hello = () => {
   
    const [isClicked, setClicked] = useState(false);
    
    const ContactMeClickHandle = () => {
        setClicked(!isClicked);
    }



    return(
        <section  className='hello-section' id="hello-section">
            <article> 
                <div className='main-container'>
                    <HiCloud/>
                    <h1>My name is <span>Mateusz Małecki</span></h1>
                    <p>I am looking for a first job as junior web developer</p>
                    <p>in Szczecin, Poland</p>
                    <a href={cv} target='_blank' rel="noopener noreferrer" download><button className="download" >Download CV</button></a>
                    <button onClick={ContactMeClickHandle}  className='contact'>Contact Me</button>
                </div>
                <PopupWindowContact isClicked={isClicked} />
                <BlobWide/>
            </article>
            <BottomBorder/>
        </section>
    );
}
export default Hello;