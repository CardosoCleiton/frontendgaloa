import React,{useState} from 'react';
//import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';
import '../styles/elements/select_language.css';
import globo from '../images/language_image.svg'
import { Select_language_data } from './Select_language_data';
import { isTemplateExpression } from 'typescript';





function Select_language() {
             
    const [camposelect,setCamposelect] = useState(false);
    const showContainer = () => setCamposelect(!camposelect);
    

    const [languages,setLanguages] = useState(false);
    const showLanguage = () => setLanguages(!languages);
    
    const linguaSelecionada = [...Select_language_data];
    var idioma;
    
 function lingua (idioma){
        //const linguaSelecionada = [...Select_language_data];
        linguaSelecionada.find(function(item){
            return item.content === idioma
    })
    console.log(idioma)
}

//console.log(linguaSelecionada)

//console.log(lingua());

    return (
        <div className="select-box">
        <div  className={ camposelect ? 'options-container active': 'options-container'}>
            {Select_language_data.map((item,index)=>{
              return(                  
                   <div className="option">
                    <input type="radio" className="radio" id={item.id} name={item.name} />
                    <label for={item.id} onClick={showContainer}>{item.content}</label>
                   </div>
            )})}
        </div>

        <div onClick = {showContainer}  className="selected">
           <img src={globo}/>
           {languages 
           ? 
           lingua()
           : 
           'PT-BR'}
        </div>
    </div>
    )
}

export default Select_language;





