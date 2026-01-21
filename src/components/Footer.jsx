import React from "react";

export default function() {
    return(
        <footer style={styles.footer}>
            <a href="#" style={styles.a}><h1>Voltar ao início</h1></a>
            <h3> © {new Date().getFullYear()} Cauã Ailton. Todos os direitos reservados.</h3>

        </footer>
    )
}

const styles ={
    footer: {
        paddingTop: '20px',
        paddingBottom: '20px',
        transform: 'translateY(700px)',
        borderTop: '2px solid white',
        fontSize: '15px',
        color: 'white',
        textAlign: 'center'
    },
    a: {
        textDecoration: 'none',
        color: '#5897e9'
    }
}