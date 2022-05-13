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
                    <form>           
                            <div className="form-group">
                                <h2>Fale Comigo</h2>
                                <label for="staticNome" class="col-sm-2 col-form-label row">Nome</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Seu nome e sobrenome"/>
                                <label for="staticEmail" class="col-sm-2 col-form-label row">Email</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Seu e-mail"/>            
                                <label for="staticEmail" class="col-sm-2 col-form-label row">Assunto</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Deixe aqui sua mensagem..."></textarea>
                                <button type="button" class="btn btn-outline botao" href="https://outlook.live.com/mail/0/">Enviar</button>
                            </div>    
                    </form> 
                </div> 
            </div>            
        </>
    )
}