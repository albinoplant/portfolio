import React,{ useState, useEffect } from 'react';
import Blob from '../graphics/blob'
import Contact from'./contact';
import '../variables.scss';
import './popup-window-contact.scss';

const PopupWindowContact = ({isClicked}) => {
    
    const [show, setShow] = useState(isClicked);

    useEffect(() => {
        if (isClicked) setShow(true);
    },[isClicked]);

    const onAnimationEnd = () => {
        if (!isClicked) setShow(false);
    };


    return (
        show && (     
            <aside className='popup-window-contact'
                style={{ animation: `${isClicked ? "popIn" : "popOut" } 0.4s`}}
                onAnimationEnd={onAnimationEnd}    
            >
                <div className='popup-container'>
                    <Blob/>
                    <Contact/>
                </div>
            </aside>
        )

 );
}
 
export default PopupWindowContact;