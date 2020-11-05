import React,{Component} from 'react';
import{render} from 'react-dom';
import '../styles/elements/resumo.css';


export default class Resumo extends React.Component {

    constructor (props){
        super(props);
        this.state = {clique: false};
        this.clicou = this.clicou.bind(this);
    }
    
    clicou(e){ 
       var status = this.state.clique;
       if (status === false){
           status = true
       }else{
           status = false
       }
       this.setState({clique: status});
       e.preventDefault();
  }

    render(){
        return(
            <div className="resumo">
                <h1 className='h1'>Resumo</h1>
                <div className="div_Txt">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel  aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut.  Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.  Etiam aliquam dictum nisl, vel aliquet enim accumsan sit ametl accumsant <span id="pontos"> {this.state.clique ? " " : "..."}</span>
                    <span className ={this.state.clique ?  "mais" : "menos"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel  aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut.  Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.  Etiam aliquam dictum nisl, vel aliquet enim accumsan sit ametl accumsant
                    </span>
                    <a className="btnLookMore" onClick={this.clicou}> {this.state.clique ? "saiba menos":"saiba mais"}</a>
                  </p>
                </div>
            </div>           
        )
    }
}