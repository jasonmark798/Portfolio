import React from "react";
import './Projetos.css';
import Skills from "./Skills";

export default function(){
    return(
        <main className="Todos-Projetos" id="Projetos">
            <h2>Meus <span className="Span3">Projetos</span></h2>
            <div className="Pro-Container">
                <a href="https://github.com/jasonmark798/Netflix-Clone" target="_blank">
                    <div className="Projeto">
                        <img className="Img-Projeto" src="./Netflix-Copia.png" alt="UI-Clone-Netflix-Projeto" />
                        <div className="Sk">
                            <div className="html" id="Skill-Projeto"><h4>HTML</h4></div>
                            <div className="css" id="Skill-Projeto"><h4>CSS</h4></div>
                        </div>
                        <h5>Netflix UI Clone</h5>
                        <p>Desenvolvimento de uma interface inspirada na Netflix, utilizando HTML5, CSS3  com foco em layout moderno, responsividade e organização de código.</p>

                    </div>
                </a>
                <a href="https://github.com/jasonmark798/FutebolClub" target="_blank">
                    <div className="Projeto">
                        <img className="Img-Projeto" src="./FutebolClub.png" alt="FutebolClub-Projeto" />
                        <div className="Sk">
                            <div className="html" id="Skill-Projeto"><h4>HTML</h4></div>
                            <div className="css" id="Skill-Projeto"><h4>CSS</h4></div>
                            <div className="js" id="Skill-Projeto"><h4>JavaScript</h4></div>
                            <div className="rct" id="Skill-Projeto"><h4>React</h4></div>
                            <div className="git" id="Skill-Projeto"><h4>Git</h4></div>
                            <div className="fig" id="Skill-Projeto"><h4>Figma</h4></div>
                        </div>
                        <h5>FutebolClub</h5>
                        <p>tem como objetivo o desenvolvimento de um site de futebol inspirado no conceito de um álbum de figurinhas, focado em cinco times do futebol brasileiro campeões mundiais.</p>

                    </div>
                </a>

            </div>
        </main>
    )
}
