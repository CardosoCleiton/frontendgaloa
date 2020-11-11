import React,{Component} from 'react';
import{render} from 'react-dom';
import '../styles/elements/discussoes.css';

import Hand from '../images/icone1_hand.svg'
import Q_A from '../images/icone2_Q_A.svg'
import Light from '../images/icone3_light.svg'

import BtnCriarTopico from './btnCriarTopico'

import InserirTopico from './inserirTopico'

export default class Discussoes extends React.Component {
  constructor (props){
    super(props);
    this.state = {clique: false};
    
    this.clicou = this.clicou.bind(this);
}

clicou(e){ 
   var status = this.state.clique;
   if (status === false){
       status = true
       console.log("clicou true")
   }else{
       status = false
       console.log("clicou false")
   }
   this.setState({clique: status});
   e.preventDefault();
}

  
  
  render(){
        return(
            <div className="discussoes">
                <h1>Discussões</h1>
                <div className={this.state.clique ? "isVisible":"notVisible"}> 
                <InserirTopico/>        
                </div>

                <div className="compartilhe">
    
                   <div className="divCompartilhe_1">
                     <p className="txtCompartilhe_1">Compartilhe suas ideias ou dúvidas com os autores! </p>
                   </div>

                   <div className="imagens">
                     <img className = "img_1" src={Hand}></img>
                     <img className = "img_2" src={Q_A}></img>
                     <img className = "img_3" src={Light}></img>
                   </div>

                   <div className="divCompartilhe_2">
                   <p className="txtCompartilhe2">Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? Deixe seus questionamentos ou sugestões para o autor! </p>
                   </div>


                   <div className = 'btn_topico'>
                   <BtnCriarTopico onPress = {this.clicou.bind(this)}  text= "criar tópico"/>
                   </div>

                </div>


            </div>           
        )
    }
}