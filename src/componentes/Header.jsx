import logo from '../img/logo.svg'
import '../stylos/Header.css'
import { BtnMn } from "../componentes/BtnMn.jsx";

export const Header = () =>{
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="">
                            <img src={logo} alt="logo" />
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">Acerca de</a>
                    </li>
                    <li>
                        <a href="#">Nuestros productos</a>
                    </li>
                    <li>
                        <a href="#">Nuestras recetas</a>
                    </li>
                    <li>
                        <a href="#">Noticia</a>
                    </li>
                    <li>
                        <a href="#">Carreras</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                    <li>
                        <BtnMn/>
                    </li>
                </ul>
            </nav>

        </header>
        
    )
}

