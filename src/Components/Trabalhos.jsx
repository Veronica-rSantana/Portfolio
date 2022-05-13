import React from "react";
import '../Style/CSS/praticando.css';

export default function Trabalhos(){
    return(
        <>
        <h2 className="textoh2">Hora da Prática...</h2>
        <div className="container">
            <h2 className="textoh2">Aplicação Web</h2>
                <div class="card-group">
                    <div class="card">                      
                        <img class="card-img-top" src="../Imagens/vsagencia.jpeg" alt="VS Agência de Viagens"/>
                        <div class="card-body">
                        <h5 class="card-title">Agência de Viagens & Turismo</h5>
                            <p class="card-text">Aplicação criada como atividade prática na recode usando as tecnologias 
                                                abordadas em aulas,sendo elas:<br/>
                                                <br/>Front-end:
                                                <br/>
                                                ReactJs,CSS,Bootstrap,Java Script<br/>
                                                <br/>
                                                Back-end:<br/>
                                                Java Spring Boot<br/>
                                                Postgres.
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="../Imagens/app-empodelas.png" alt="Projeto EmpoDelas"/>
                        <div class="card-body">
                        <h5 class="card-title">EmpoDelas</h5>
                            <p class="card-text">Projeto de minorias desenvolvido em squad,desenvolvidos para mulheres
                                                do bairro de Ibura-Três Carneiros,em situação de vulnerabilidade social.<br/>
                                                <br/>Front-end:<br/>
                                                React, HTML, CSS, Java Script, 
                                                Form Submit API, Bootstrap<br/>
                                                <br/>
                                                Back-end:<br/>
                                                Java, Spring, Firebase, Heroku, PostgreeSQL<br/>
                                                <br/>
                                                Mobile: <br/>
                                                React Native
                            </p>
                        <a className="visitar" href=" https://empodelas-site.herokuapp.com/">CONHEÇA MAIS...</a>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="../Imagens/praticando.png" alt="Imagem de capa do card"/>
                        <div class="card-body">
                        <h5 class="card-title">Full Stack Eletro</h5>
                            <p class="card-text">Esta foi a primeira aplicação web desenvolvida como atividade prática,usando:<br/>
                                                <br/> Html<br/>
                                                CSS<br/>
                                                Bootstrap 
                            </p>
                        </div>
                    </div>                                       
                </div>
                <div class="card-group segundo">
                    <div class="card">
                        <img class="card-img-top" src="../Imagens/praticando.png" alt="Imagem de capa do card"/>
                        <div class="card-body">
                        <h5 class="card-title">CONTINUA...</h5>
                             <p class="card-text">Em breve trago novidades!</p>                        
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="../Imagens/praticando.png" alt="Imagem de capa do card"/>
                        <div class="card-body">
                        <h5 class="card-title">CONTINUA...</h5>
                             <p class="card-text">Em breve trago novidades!</p>                        
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="../Imagens/praticando.png" alt="Imagem de capa do card"/>
                        <div class="card-body">
                        <h5 class="card-title">CONTINUA...</h5>
                                <p class="card-text">Em breve trago novidades!</p>
                        </div>
                    </div>                                       
                </div> 
                <div>
                    <h2 className="textoh2">Logo</h2>
                    <div class="card-group segundo">
                        <div class="card">
                            <img class="card-img-top" src="../Imagens/Logo-Carol-Cutrim.png" alt="Imagem de capa do card"/>
                            <div class="card-body">                                              
                            </div>
                        </div>
                    <div class="card">
                        <img class="card-img-top" src="../Imagens/Logo-empodelas.png" alt="Imagem de capa do card"/>
                         <div class="card-body">
                             <h5 class="card-title">CONTINUA...</h5>
                            <p class="card-text">Em breve trago novidades!</p>                        
                         </div>
                    </div>
                        <div class="card">
                            <img class="card-img-top" src="../Imagens/logo1.png" alt="Imagem de capa do card"/>
                            <div class="card-body">
                                <h5 class="card-title">CONTINUA...</h5>
                                <p class="card-text">Em breve trago novidades!</p>
                            </div>
                        </div>                                       
                    </div> 
                </div>                        
            </div>                  
        </>
    )
}