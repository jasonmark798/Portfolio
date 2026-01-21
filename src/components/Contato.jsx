import React from "react";
import './Contato.css';


export default function(){
    return(
        <div className="Contato" id="Contato">
            <h5>Entre em <span>Contato</span></h5>
            <div className="Redes">
                <a href="https://github.com/jasonmark798" target="_blank"><img className="icon" src="./Github.png" alt="Github-logo" /></a>
                <a href="mailto:seuemail@exemplo.com?subject=Contato&body=Olá, gostaria de falar com você!"><img className="icon" src="./Email.png" alt="Email-logo" /></a>
                <a href="https://www.linkedin.com/in/cauaailton/"><img className="icon" src="./Linkedin.png" alt="Linkedin-Logo" /></a>
            </div>
            
        </div>
    )
}