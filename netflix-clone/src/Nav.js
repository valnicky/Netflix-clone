import React, {useState, useEffect} from 'react';
import './Nav.css';


function Nav() {
    const[show, handleShow] = useState(false);
    //the code to run once when the Nav component loads
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                 handleShow(true);
            }else handleShow(false);
        });
        return () =>{
            window.removeEventListener("scroll");
        }
        
    }, []);
    
    return ( < div className={`nav ${show && "nav__black"}`} >
<img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/0f" alt="Netflix Logo"/>

<img className="nav__avatar"
src="https://pbs.twimg.com/profile_images/124011999041155"
/>

        </div>
    )
}

export default Nav