import React from 'react';

import '../styles/elements/inserirTopico.css'
import img_B from '../images/Shape_B.svg'
import img_I from '../images/Shape.svg'
import BtnEnviar from './btn_Enviar'

export default class InserirTopico extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            clicouB:false,
            clicouI:false,
            normal: ["txtAreaConteudo"]
        };
        this.clicouBold = this.clicouBold.bind(this);
        //this.res = this.res.bind(this);
    }


    handleKeyDown(e) {
        e.preventDefault();
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`; 
       // e.target.style.height = `${Math.min(e.target.scrollHeight,limit)}px`;
      }



    render(){
        return(
            <div className = "div_topico">

                <div  className = "div_txt_topico">
                    <p>Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</p>
                </div>

                <form onSubmit={this.HandleSubmit} >

                <label >
                    <b>Assunto</b>
                    <textarea rows="1"  placeholder="Defina um tópico sucinto para notificar os autores..." className ='txtAreaAssunto'></textarea>
                </label>

                <label>
                    <b >Conteudo</b>
                <textarea rows="4" className ="txtAreaConteudo" onKeyDown={this.handleKeyDown}>
                    </textarea>
                </label>

                <div className="div_Estilo_txt">
                    <div className="div_Img_1"> <img onClick={this.clicouBold} src={img_B}></img></div>
                    <div className="div_Img_2"> <img onClick={this.clicouItalic} src={img_I}></img></div>

                    <div className="btn_enviar">
                    <BtnEnviar type="submit" onClick={this.props.onPress} text ="enviar"></BtnEnviar>
                    </div>
                </div>
                </form>
            </div>
        )
     }
}