import React from 'react';
//import img_1 from '../images/tres_pontinhos.svg';
//import heart from '../images/coracao.svg'

//import '../styles/elements/post.css'
import '../styles/elements/post.css'

import Comentarios from './Comentarios'

import img_B from '../images/Shape_B.svg'
import img_I from '../images/Shape.svg'
import BtnEnviar from './btn_Enviar'



export default class Post extends React.Component {

    constructor(props){
        super(props);


        this.state = {
            comments:[],
            novoAssuntoText:'',
            novoConteudoText:''
        }

       
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAssuntoChange = this.handleAssuntoChange.bind(this);
        this.handleConteudoChange = this.handleConteudoChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this)
    }

handleSubmit(e){

       // alert(this.state.novoAssuntoText)
       //alert(this.state.novoConteudoText)

      // this.setState({novoConteudoText: e.target.value})

        this.setState({
            comments:[
                ...this.state.comments,
               {assunto: this.state.novoAssuntoText,
                conteudo:this.state.novoConteudoText}
            ]
        })

        this.setState({novoAssuntoText:''})
        this.setState({novoConteudoText:''})
        e.preventDefault();
    }

    handleAssuntoChange(e){
        this.setState({novoAssuntoText: e.target.value})
       // this.setState({novoConteudoText:e.target.value})
    }
    
    handleConteudoChange(e){
       this.setState({novoConteudoText: e.target.value})
     }

       
    handleKeyDown(e) {
        e.preventDefault();
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`; 
       // e.target.style.height = `${Math.min(e.target.scrollHeight,limit)}px`;
      }

    render(){
        return(
        <div>

            <div className = {this.props.visibilidade}>

            <div  className = "div_txt_topico">
                <p>Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</p>
            </div>

            <form onSubmit={this.handleSubmit}>

            <label >
                <b>Assunto</b>
                <textarea id="assunto" rows="1" aria-required="true"  placeholder="Defina um tópico sucinto para notificar os autores..." className ='txtAreaAssunto' value = {this.state.novoAssuntoText} onChange={this.handleAssuntoChange} required></textarea>
            </label>

            <label>
                <b >Conteudo</b>
                <textarea id="conteudo" aria-required="true" onChange={this.handleConteudoChange} value = {this.state.novoConteudoText}  rows="4" className ="txtAreaConteudo" required ></textarea>
            </label>

            <div className="div_Estilo_txt">
                <div className="div_Img_1"> <img onClick={this.clicouBold} src={img_B}></img></div>
                <div className="div_Img_2"> <img onClick={this.clicouItalic} src={img_I}></img></div>
                <div className="btn_enviar">
                <BtnEnviar type="submit"  OnSubmit = {this.handleSubmit} text ="enviar"></BtnEnviar>
                </div>
            </div>
            </form>
            </div>



            {this.state.comments.map((item,index)=>{
                console.log(item)
                console.log(index)
                //console.log(item.conteudo)
                        return <Comentarios key={index} assunto = {item.assunto} conteudo ={item.conteudo} />
                    })
            } 
                
       
        </div>
       )
    }
}