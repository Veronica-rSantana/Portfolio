import React from "react";
import'../Style/CSS/Contato.css';

export default function FaleComigo (){
    return(
        <>        
            <div className="redes">
                <div className="contato">
                    <div className="conect">
                        <h1>Conecte-se as minhas redes!</h1>
                        </div>
                    <div class="social-links ">
                        
                        <a  href="https://www.linkedin.com/in/verônica-santana-4b49aa168">
                            <img src="../Imagens/linkedin.png" alt="LinkedIn"/>
                        </a>
                        <a  href="https://github.com/Veronica-rSantana"><img src="../Imagens/github.png" alt="GitHub"/>
                        </a>
                        <a  href=" https://wa.me/5571994020237"><img src="../Imagens/whatsapp.png" alt="WhatsApp"/></a>                     
                    </div>
                </div>
                <div className="formulario">
                    <form action="https://formsubmit.co/veronica_rsantana@hotmail.com" method="POST">           
                            <div className="form-group">
                                <h2><strong>Fale Comigo</strong></h2>
                                <label for="staticNome" class="col-sm-2 col-form-label row">Nome</label>
                                <input type="text" name="nome"className="form-control" id="exampleFormControlInput1" placeholder="Seu Nome e Sobrenome"/>
                                <label for="staticEmail" className="col-sm-2 col-form-label row">Email</label>
                                <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="Seu e-mail"/>            
                                <label for="staticEmail" className="col-sm-2 col-form-label row">Assunto</label>
                                <textarea  name="assunto"className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Deixe aqui sua mensagem..."></textarea>
                                <button type="submit" className="btn btn-outline botao">Enviar</button>
                            </div>    
                    </form> 
                </div> 
            </div>            
        </>
    )
}