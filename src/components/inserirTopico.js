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

    recebeArray(){
    }

    clicouBold(e){   
        e.preventDefault();
        const newArray = this.state.normal.map(function(item){return item;})
        console.log("/////")
        console.log(newArray)

        const indexx = this.state.normal.findIndex(function (item){return item === "txtAreaConteudobold";}) 
        console.log("/////")
        console.log(indexx)
        console.log("/////")

        if(this.state.clicouB === true){
            var statusB = false   
            console.log(statusB)
            console.log(this.state.normal)
            if (indexx > -1) {
                this.setState({
                    normal: this.state.normal.splice(indexx,1)
                  })
              }
           console.log(this.state.normal)
        }
                
        if(this.state.clicouB === false){
            var statusB = true
            console.log(statusB)
            this.setState({
                normal: this.state.normal.push("txtAreaConteudobold")
              })
            console.log(this.state.normal)
        }

        this.setState({
            clicouB: statusB
          })
    }
  
    handleKeyDown(e) {
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

                <form action="" >

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
                    <BtnEnviar text ="enviar"></BtnEnviar>
                    </div>
                </div>
                </form>
            </div>
        )
     }
}