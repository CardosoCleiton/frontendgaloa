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
                    <tr >
                        <th className="th1">Detalhes</th>
                    </tr>
                    <tr>
                       <td>
                       <Scroll>
                        <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut.  Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.  Etiam aliquam dictum nisl, vel aliquet enim accumsan sit ametl accumsant... ver mais </span>
                        
                        </Scroll>   
                       </td>
                    </tr>
                </table>
            </div>
    )
}

export default Btns_scrool
