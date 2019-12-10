import React from 'react';
import Telephone from '../graphics/telephone-icon';
import Github from '../graphics/github-icon';
import Mail from '../graphics/mail-icon';

const sendMail = () =>{
    const mail = document.createElement("a");
    mail.href = "mailto:mateuszmalecki@hotmail.com";
    mail.click();
}

const Contact = () => {
    return ( 
        <div className='popup-content-container'>
                <div className="row"><Telephone /> <span><a href="tel:+533286123">533 286 123</a></span></div>
                <div className="row"><Mail /> <span style={{'cursor':'pointer'}} onClick={()=>sendMail()}>mateuszmalecki@hotmail.com </span></div>
                <div className="row"><Github /> <a style={{textDecoration:'none'}} href="https://github.com/albinoplant/"><span>albinoplant </span></a></div>
            </div>
     );
}
 
export default Contact;