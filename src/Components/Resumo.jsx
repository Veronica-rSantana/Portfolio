import React from "react";
 import "../Style/CSS/resumo.css";


export default function Resumo(){
    return(
        <>
        <div className="resumo">          
            <section className="sobremim">       
                <div>
                    <h1>Verônica Santana</h1>
                    <p className="full">Desenvolvedora Full Stack jr.</p>
                    <h2>Olá,</h2>
                    <p className="texto-home">
                    Seja bem vindo ao meu protifólio, aqui você verá um pouco de toda minha trajetória tenho 28 anos,
                    técnica em administração em transição de carreira, agora desenvolvedora full stack.Conheci essa profissão através
                    do processo seletivo da Recode Pro,Moro sozinha, porém com minha mãe, tenho o Ralf que é  um dog muito bagunceiro
                    e brincalhão.  </p>
                </div>
            <div>
                <h3 className="dev-skills"><strong>Skills Desenvolvidas</strong></h3>
            </div>
                <div className="skills">  
                    <img className="hab1" src="../Imagens/equipe.png" alt="" />       
                    <img className="hab1" src="../Imagens/comunicacao.png" alt="" />         
                    <img className="hab1" src="../Imagens/organizacao.png" alt="" />                    
                </div>
                <div className="nome-hab">
                    <p>Trabalho em equipe</p> 
                    <p>Comunicação</p>  
                    <p>Liderança</p>   
                </div>
            </section>
            <section>            
                    <img src="../Imagens/bannerHome.png" className="imagem-lateral" alt="perfil" />        
            </section>
        </div>
      </>
    )
}