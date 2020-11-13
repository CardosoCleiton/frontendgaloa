import React from 'react';

import img_1 from '../images/tres_pontinhos.svg';
import heart from '../images/coracao.svg'

//import '../styles/elements/post.css'
import '../styles/elements/comentarios.css'

export default class Comentarios extends React.Component {

    render(){
        return(

            <div className = "postVisible">
                <div className = "divConteudo">
                    <div>  
                    <p className ="txtAssunto">{this.props.assunto}</p>
                    <p className ="nomeUser">Carlos Henrique Santos</p>
                    </div>
                    <div className= "divComentario">
                    <p className= "txtComentario">{this.props.conteudo}</p>
                    </div>
                    <div className = "divImgs">
                        
                        <div className ="div_Img_tres_p">
                        <img className ="img_tres_p" src={img_1}></img>
                        </div>

                        <div className="coracao">
                        <img src={heart}></img>
                        </div>
                        
                        <p className="like">1 like</p>
                        <p className="resposta">1 resposta</p>

                    </div>
                </div>
            </div>
        )
    }
}