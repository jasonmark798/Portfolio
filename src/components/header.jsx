import './Header.css'
import Skills from './Skills'
import Projetos from './Projetos'

export default function Header() {
    return(
        <header>
            <nav className="Nav">
                <i className="fa-solid fa-code"></i>
                <a className='A-Nav' href="#">Home</a>
                <a className='A-Nav' href="#Skills">Skills</a>
                <a className='A-Nav' href="#Projetos">Projetos</a>
                <a href="#Contato"><button className='ButtonHeader'>Contato</button></a>
            </nav>
        </header>
    )
}
