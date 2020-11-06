import React from 'react';

import '../styles/elements/inserirTopico.css'
import img_B from '../images/Shape_B.svg'
import img_I from '../images/Shape.svg'

import BtnEnviar from './btn_Enviar'


export default class InserirTopico extends React.Component {

    handleKeyDown(e) {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`; 
        // In case you have a limitation
       // e.target.style.height = `${Math.min(e.target.scrollHeight,limit)}px`;
      }

    
    render(){
       
        return(
            
            <div className = "div_topico">

                <div  className = "div_txt_topico">
                    <p>Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</p>
                </div>

                <form action="" >

                <label >
                    <b>Assunto</b>
                    <textarea rows="1"  placeholder="Defina um tópico sucinto para notificar os autores..." className ='txtAreaAssunto'></textarea>
                </label>

                <label>
                    <b >Conteudo</b>
                    <textarea rows="4" id='txtAreaConteudo' onKeyDown={this.handleKeyDown}>
                    </textarea>
                </label>

                <div className="div_Estilo_txt">
                    <div className="div_Img_1"><img src={img_B}></img></div>
                    <div className="div_Img_2"><img src={img_I}></img></div>

                    <div className="btn_enviar">
                    <BtnEnviar text ="enviar"></BtnEnviar>
                    </div>
                </div>

                </form>
            </div>
        )
     }
}