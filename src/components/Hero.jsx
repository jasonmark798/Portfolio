import React from "react";
import './Hero.css';

export default function Hero() {
    return (
        <main>
            <h1 style={style.h1}>Bem vindo ao meu <span className="span-Hero">Portfólio!</span></h1>
            <h2 style={style.h2}>//Desenvolvedor Full-stack</h2>
            <div className="Div-Img">
                <img src="./MinhaImg.jpg" alt="MinhaImagem" />
            </div>
            <a href="./MeuCurriculo.pdf" download><button className="ButtonHero" style={style.button}>Currículo</button></a>
        </main>
    )
}

const style ={
    button: {
        backgroundColor: 'white',
        width: '150px',
        height: '40px',
        borderRadius: '20px',
        borderStyle: 'none',
        fontSize: '15px',
        color:'#020F2C',
        cursor: 'pointer'
    },

    h2: {
        fontSize: 'clamp(1.30rem, 3vw, 1rem)',
        color:'rgb(136, 136, 136)',
        fontFamily: 'PT Sans sans-serif',
        fontWeight: 400,
        fontStyle: 'italic'
    },
    h1: {
        fontSize: 'clamp(1.75rem, 3vw, 2.1rem)',
        fontFamily: 'PT Sans sans-serif',
        fontWeight: 400,
        fontStyle: 'normal',
        color: 'white'
    }
}
