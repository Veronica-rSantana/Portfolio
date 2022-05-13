import React from "react";
import '../Style/CSS/eventos.css';

export default function Eventos(){
    return(
        <>
        <div className="conteiner">
           
            <div className="experiencia">
                <h2>Experiências</h2>
                <div class="media recode">
                    <img class="align-self-start expfoto mr-3" src="../Imagens/recode.png"  alt="Imagem de exemplo genérica"/>
                    <div class="media-body recode">
                        <h5 class="mt-0 titulo">Recode Pro.</h5>
                        <p><strong>Aluna:</strong> Desenvolvedora Full Stack Jr <strong>Período:</strong> Setembro 2021 - Abril 2022.</p>
                        <p><strong>Atividades:</strong> Desenvolver em squad um projeto para minorias,cujo grupo foi mulheres,
                        <br/> pronpondo soluções para demanda de problemas enfrentados.
                        <br/>Além disso, resolver desafios propostos pela Recode usando liguagens de programação
                        <br/><strong>(C#, DotNet, SqlServer, ReactJs, Java Spring Boot, Java, Html,Bootstrap, CSS)</strong> já abordadas em sala de aula.</p>
                        <p><strong>Habilidades Desenvolvidas:</strong> Comunicação, Trabalho em equipe, Liderança(Fui vice líder de squad), Organização, capacidade de raciocínio.</p>    
                    </div>
                </div>         
                <div class="media subway">
                    <img class="align-self-start expfoto mr-3" src="../Imagens/sbuway-nba.jpg"  alt="Imagem de exemplo genérica"/>
                    <div class="media-body">
                        <h5 class="mt-0 titulo">Lecel Comércio de Alimentos Ltda.</h5>
                        <p><strong>Cargo:</strong> Operadora de Caixa  <strong>Período:</strong> Maio 2013 - Fevereiro 2016.</p>
                        <p><strong>Atividades:</strong> Operações de caixa, organização e contagem de estoque,compra de material,
                        <br/>reposição de mercadorias,limpeza do ambiente.  </p>
                        <p><strong>Habilidades Desenvolvidas:</strong> Proatividade, organização, polivalência, e comunicação</p>
                        
                    </div>
                </div> 
                <div class="media fabesb">
                    <img class="align-self-start expfoto mr-3" src="../Imagens/fapesb.jpg"  alt="Imagem de exemplo genérica"/>
                    <div class="media-body">
                        <h5 class="mt-0">Fundação de Amparo à Pesquisa do Estado da Bahia.</h5>
                        <p><strong>Cargo:</strong> Estagiária - Diretoria Científica  <strong>Período:</strong> Outubro 2017 - Outubro 2018.</p>
                        <p><strong>Atividades:</strong> Operações de caixa, organização e contagem de estoque,compra de material,
                        <br/>reposição de mercadorias,limpeza do ambiente.  </p>
                        <p><strong>Habilidades Desenvolvidas:</strong> Proatividade, organização, polivalência, e comunicação</p>
                        
                    </div>
                </div> 
                                        
            </div>
            <div className="Container">
                <div className="Cards">
                    <section className="eventos">
                        <h2> Eventos</h2>
                        <div class="card-group">                                   
                            <div class="card">
                                <img class="card-img-top" src="../Imagens/feira.jpg" alt="Feira-de-Artes"/>
                                <div class="card-body">
                                    <h5 class="card-title">Feira das Artes e Empreendimentos da Diversidade - 2017.</h5>
                                    <p class="card-text">A Feira buscou fomentar a criação de um ambiente favorável para geração de oportunidades de negócios,
                                                        através da troca de conhecimentos, inovação, difusão de conceitos e tecnologias; além de estimular o surgimento,
                                                        a ampliação e a diversificação de empreendimentos sustentáveis e difundir marcas, 
                                                        produtos e serviços que têm a diversidade como mola propulsora dos seus trabalhos.</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Auxílio na divulgação e recepção de convidados.</small>
                                </div>
                            </div>

                            <div class="card">
                                <img class="card-img-top" src="../Imagens/roberto-santos.jpg" alt="roberto-santos"/>
                                <div class="card-body">
                                <h5 class="card-title">Prêmio Roberto Santos de Mérito Científico - 2018.</h5>
                                <p class="card-text">Criado em 2015, o Prêmio Roberto Santos de Mérito Científico tem o objetivo de reconhecer o trabalho 
                                                    de excelência realizado pelos pesquisadores que contribuem para o desenvolvimento e estímulo ao exercício de
                                                    pesquisas científicas na Bahia.</p>
                                </div>
                                <div class="card-footer">
                                <small class="text-muted">Nessa participação fui reconhecida por excelência e comprometimento.</small>
                                </div>
                            </div>
                            
                            <div class="card">
                                <img class="card-img-top" src="../Imagens/dom-pedro.jpeg" alt="Casaldáliga"/>
                                <div class="card-body">
                                <h5 class="card-title">Lançamento da Biografia de Pedro CasalDáliga - 2019.</h5>
                                <p class="card-text">O evento foi promovido pela comissão e pelo Grupo Tortura Nunca Mais,
                                                    a Associação de Advogados e Advogadas Pela Democracia, Justiça e Cidadania (ADJC) 
                                                    e a Associação Brasileira de Juristas pela Democracia (ABJD).</p>
                                </div>
                                <div class="card-footer">
                                <small class="text-muted">Staff na venda de livros.</small>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="text">
                <h3>
                    Tive o prazer de participar voluntariamente desses eventos 
                    <br/>e poder conhecer e entender melhor sobre como 
                    <br/> funciona a gestão dos mesmos.
                    <br/>
                </h3>
            </div>
        </div>
        </>    
    )
}