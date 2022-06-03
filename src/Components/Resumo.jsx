import React from "react";
 import "../Style/CSS/resumo.css";


export default function Resumo(){
    return(
        <>
        <div className="resumo">          
            <section className="sobremim">       
                <div className="titulo">
                    <h1>Verônica Santana</h1>
                    <p className="full">Desenvolvedora Full Stack jr.</p>
                    <h2>Olá,</h2>
                    <p className="texto-home">
                    Seja bem vindo(a) ao meu portfólio, aqui você verá um pouco da minha trajetória e se conectar comigo.
                    <br/>Tenho 29 anos,
                    técnica em administração em transição de carreira, agora Desenvolvedora full stack.Conheci essa profissão através
                    do processo seletivo da Recode Pro,Moro sozinha, porém com minha mãe, tenho o Ralf que é  um dog muito bagunceiro
                    e brincalhão.  </p>
                </div>
            <div>
                <h3 className="dev-skills"><strong>Skills Desenvolvidas</strong></h3>
            </div>
                <div className="skills">
                    <div> 
                    <img className="hab1" src="../Imagens/equipe.png" alt="" />
                    <p>Trabalho em equipe</p>
                    </div>  
                     
                    <div>    
                    <img className="hab1" src="../Imagens/comunicacao.png" alt="" />
                    <p>Comunicação</p> 
                    </div>

                    <div >        
                    <img className="hab1" src="../Imagens/organizacao.png" alt="" /> 
                    <p>Liderança</p>                     
                    </div>
                </div>
                
            </section>
            <section>            
                    <img src="../Imagens/bannerHome.png" className="imagem-lateral" alt="perfil" />        
            </section>
        </div>
      </>
    )
}