import React from "react";
import '../Style/CSS/footer.css';


export default function Footer (){
    return(
        <>
        <div className="conteiner-fluid footer">
            <div className="frase">
                <h2>Trabalhar em equipe para mim é uma<br></br> explosão de conhecimentos...</h2>
            </div>
            <div className="botoes">
                <div className="calenbly">
                  
                <button type="button" className="btn"><a href="https://calendly.com/veronica_rsantana">Agende aqui nossa entrevista!</a></button>                  
                    
                </div> 
                <div className="icones">
                    <a href="https://www.linkedin.com/in/verônica-santana-4b49aa168">
                        <img src="../Imagens/linkedin.png" alt="LinkedIn"/>
                    </a>

                    <a href="https://github.com/Veronica-rSantana"><img src="../Imagens/github.png" alt="GitHub"/>
                    </a>
                    <a href=" https://wa.me/5571994020237"><img src="../Imagens/whatsapp.png" alt="WhatsApp"/></a>
                </div>              
            </div>          
        </div>
     </>
    )
};

