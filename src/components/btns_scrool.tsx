import React from 'react'
import {Bt_Download, BtStar,BtDoi,Bts} from '../components/btnstyles'
import {Scroll} from '../components/scroolbarstyles'
import iconeDownload from '../images/icone_download.png';
import iconeStar from '../images/estrela_botao.svg';
import iconeDoi from '../images/doi.svg';

function Btns_scrool() {
    return (
            <div className="box_scroll">
                
                <div className="title_scroll">
                    <Bts>
                        <Bt_Download >
                           <img src={iconeDownload}/>
                            Download
                        </Bt_Download>
                        <BtStar>
                           <img src={iconeStar}/>
                        </BtStar>
                        <BtDoi>
                           <img src={iconeDoi}/>
                        </BtDoi>
                        </Bts>
                        <div className="citar">
                        <p>COMO CITAR ESSE TRABALHO?</p>
                        </div>
                        </div>
                
                <table className ="table">
                    <tr>
                        <th className="th1">Detalhes</th>
                    </tr>
                    <tr>
                       <td>  
                       <Scroll>

                       <span>
                        
                        <div className="bloco_1">   
                        <p>Tipo de Apresentação: <strong>Pôster</strong></p>
                        <p>Eixo temático:<strong>Alimentação e saúde (AS)</strong> </p> 
                        <p>Palavras-chaves:<strong> Alimentos funcionais, alimentação escolar.</strong></p>
                        
                        </div>

                        <div className="bloco_2">
                        <strong> Autores: </strong>
                        <p>Galileo Galilei¹</p>
                        <p>Berta Lange de Morretes²</p>
                        <p>Isaac Newton³</p>
                        <p>Cesar Lattes¹</p>
                        <p>Stephen Hawking⁴</p>
                        </div>

                        <div className="bloco_3">
                        <p> ¹Universidade Estadual de Campinas </p>
                        <p> ²Universidade de São Paulo </p> 
                        <p> ³Instituto Nacional de Pesquisas Espaciais</p>
                        <p> ⁴Universidade Federal do Rio de Janeiro</p>
                        </div>

                        </span>

                        </Scroll>   
                       </td>
                    </tr>
                </table>

            </div>
    )
}

export default Btns_scrool
