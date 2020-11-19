import React,{useState} from 'react';

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
            novoConteudoText:'',
            clicouB:false,
            clicouI:false,
            textoestilo:"txtAreaConteudo",
            textoestiloatual:'teste'
        }

    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAssuntoChange = this.handleAssuntoChange.bind(this);
        this.handleConteudoChange = this.handleConteudoChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.clicouBtn= this.clicouBtn.bind(this);
        this.bClique= this.bClique.bind(this);
        this.iClique= this.iClique.bind(this);
    }

handleSubmit(e){

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
        
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`; 
        // e.target.style.height = `${Math.min(e.target.scrollHeight,limit)}px`;
    }

    bClique(e){
        e.preventDefault();
        this.setState({
            textoestilo:'',
            clicouB: !this.state.clicouB
          })
        console.log(`${'Bold situacao: ' +  this.state.clicouB}`) 
        this.clicouBtn()
    }
    
    iClique(e){
        e.preventDefault();
        this.setState({
            textoestilo:'',
            clicouI: !this.state.clicouI
        })
        console.log(`${'Italico situacao: '+ this.state.clicouI}`)
        this.clicouBtn()
    }


    clicouBtn(e){   
        console.log(this.state.clicouB)
        console.log(this.state.clicouI)
        console.log(`${'situação do texto estilo: '+ this.state.textoestilo}`)
        this.setState({textoestilo:''})

        if(this.state.clicouB === true && this.state.clicouI === true){
            console.log("bold verdadeiro e Italic verdadeiro")
            this.setState({
                textoestilo: "txtAreaConteudo txtAreaConteudobold txtAreaConteudoitalico",
              })       
        }

       else if((this.state.clicouB === false && this.state.clicouI === false) || (this.state.clicouB === '' && this.state.clicouI === '')  ){
            console.log("bold false e italic false")
            this.setState({
                textoestilo:"txtAreaConteudo",
              })
           console.log(this.state.textoestilo)
        }
        else if(this.state.clicouB === true && this.state.clicouI === false){
            console.log("bold verdadeiro e italic false")
            this.setState({
                textoestilo:"txtAreaConteudo txtAreaConteudobold",
              })
           console.log(this.state.textoestilo)
        }
        else if(this.state.clicouB === false && this.state.clicouI === true){
            console.log("bold false e italic verdadeiro")
            this.setState({
                textoestilo:"txtAreaConteudo txtAreaConteudoitalico",     
              })
           console.log(this.state.textoestilo)
        }
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
                <textarea
                id="assunto" 
                rows="1"  
                placeholder="Defina um tópico sucinto para notificar os autores..." 
                className ='txtAreaAssunto' 
                onChange={this.handleAssuntoChange}
                value = {this.state.novoAssuntoText}
                required>
                </textarea>
            </label>

            <label>
                <b >Conteudo</b>
                <textarea  
                id="conteudo"   
                rows="4" 
                className ={this.state.textoestilo}
                onKeyDown={this.handleKeyDown}
                onChange={this.handleConteudoChange}
                value ={this.state.novoConteudoText} 
                required 
                >
                </textarea>
            </label>

            <div className="div_Estilo_txt">
                <div className="div_Img_1"> <img onClick={this.bClique} src={img_B}></img></div>
                <div className="div_Img_2"> <img onClick={this.iClique} src={img_I}></img></div>
                <div className="btn_enviar">
                <BtnEnviar type="submit" text ="enviar"></BtnEnviar>
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