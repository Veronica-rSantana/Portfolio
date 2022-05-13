
import React from "react";
import '../Style/CSS/menu.css';


export default function Menu() {
    return(
        <>
        <nav class="navbar topo navbar-expand-lg ">
        
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Sobre Mim<span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Trajetoria">Trajetória</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Projetos">Projetos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Contato">Trabalhe Comigo</a>
                </li>
                <li class="nav-item dropdown social">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Social
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item rd" href="https://www.linkedin.com/in/verônica-santana-4b49aa168">Linkedin</a>
                    <a className="dropdown-item rd" href="https://wa.me/5571994020237">Whatsapp</a>
                    <a className="dropdown-item rd" href="https://github.com/Veronica-rSantana">GitHub</a>
                    </div>
                </li>
                </ul>
            </div>
        </nav>
       </>
    )    
}