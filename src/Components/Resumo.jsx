import React from "react";
 import "../Style/CSS/resumo.css";


export default function Resumo(){
    return(
        <>
        <div className="resumo">          
            <section className="sobremim">       
                <div className="titulo">
                    <h2 className="Full">Olá Prezado(a),</h2>
                    <br/>
                    <p className="texto-home">
                    Bem vindo(a) ao portfólio de uma dev em transição de carreira! 
                    Esse espaço tem o intuito de compartilhar com vocês um pouco das minhas habilidades e criar oportunidades
                    de networking para retornar ao mercado de trabalho.
                    <br/>
                    <br/>
                    Sou Técnica em Administração e recentemente participei de uma jornada de formação para Desenvolvedora
                    Full Stack Júnior através da Recode Pro, realizado totalmente online, do hackathon à aulas em tempo real.
                    <br/>
                    <br/>Fomos desafiados a criar soluções para grupos minoritários utilizando a tecnologia, nesse contexto, nosso squad desenvolveu a solução 
                    "Empodelas" <a href="https://empodelas-site.herokuapp.com/">( Conheça aqui nosso projeto... ) </a> 
                    para mulheres residentes da comunidade Ibura Três Carneiros, localizado no estado do Recife.
                    Além desse desafio, realizamos entregas periódicas individuais como propostas de atividades práticas.
                    </p>
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
                <div className="tec">
                    <h3 className="dev-skills"><strong>Algumas das Tecnologias Abordadas</strong></h3>
                    <br/>
                    <img src="../Imagens/reactjs.png" alt="logo-react" />
                    <img src="../Imagens/c-sharp.png" alt="c-sharp" /> 
                    <img src="../Imagens/css-3.png" alt="css" /> 
                    <img src="../Imagens/html-5.png" alt="html" /> 
                    <img src="../Imagens/java-script.png" alt="javascript" /> 
                    <img src="../Imagens/kanban.png" alt="kanban" /> 
                    <img src="../Imagens/sql-server.png" alt="kanban" /> 
                               
                </div>
                
            </section>
            <section>            
                    <img src="../Imagens/banner-principal.png" className="imagem-lateral" alt="perfil" />  
                         
            </section>
        </div>
      </>
    )
}