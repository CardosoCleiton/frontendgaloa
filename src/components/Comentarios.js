import React from 'react';

import img_1 from '../images/tres_pontinhos.svg';
import heart from '../images/coracao.svg'

//import '../styles/elements/post.css'
import '../styles/elements/comentarios.css'

export default class Comentarios extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            like: 0,
            liketruefalse: true,
            visible:false
        }

        this.likes= this.likes.bind(this);
        this.visibleplus = this.visibleplus.bind(this);
    }

    likes(e){
        e.preventDefault();
        if(this.state.liketruefalse === true){
            this.setState({
                like: this.state.like + 1,
                liketruefalse: false
            })
        }else{
            this.setState({
                like: this.state.like - 1,
                liketruefalse: true
            })
        }
    }

    visibleplus(e){
        e.preventDefault();
        if(this.visible){
            this.setState({
                visible: !this.state.visible
            })
        }else{
            this.setState({
                visible: !this.state.visible
            })
        }
    }

    render(){
        return(

            <div className = "postVisible">
                <div className = "divConteudo">
                    <div>  
                    <p className ="txtAssunto">{this.props.assunto}</p>
                    <p className ="nomeUser">Carlos Henrique Santos</p>
                    </div>
                    <div className={this.state.visible ? "divComentarioVisible" : "divComentario" }>
                    <p className= "txtComentario">{this.props.conteudo}</p>
                    </div>
                    <div className = "divImgs">
                        
                        <div className ="div_Img_tres_p">
                        <img onClick={this.visibleplus} className ="img_tres_p" src={img_1}></img>
                        </div>

                        <div className="coracao">
                        <img onClick={this.likes} src={heart}></img>
                        </div>
                        
                        <p className="like">{this.state.like} like</p>
                        <p className="resposta">1 resposta</p>

                    </div>
                </div>
            </div>
        )
    }
}