//import React from 'react';
import React, {useState} from 'react';

import '../styles/elements/navbar.css';
import '../styles/elements/header.css';
import Select_language from "./select_language"


import print_User from '../images/print_User.jpg';

interface TitleProps{
  text:string;
}

function Title(props:TitleProps){
  return(
  <p>{props.text}</p>
  )
}

function Header(){

  const [changeOFF,setChangeOFF] = useState(false);
  
  document.body.onresize = function() {
        
    var x = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (x < 1380) {
        setChangeOFF (true);
       // console.log(`${x}`)
       // console.log(`${changeOFF}`)
        return 
        
    }else{
        setChangeOFF (false);
        //console.log(`${x}`);
       // console.log(`${changeOFF}`);
        return
    }
  }


  return (
       <header id={changeOFF ? "headercenter":"headeright"}>

          <div className="main_title">
            <div className="div_text_top_header">
            <p className='txt1'>
            <Title text= "Anais do Simpósio Latino Americano de Ciências de Alimentos"/>
            </p>
            <p className='txt2'>
            <Title text= "Anais do 13º Simpósio Latino Americano de Ciência de Alimentos"/>
            </p>
            <p className='txt3'>
            <Title text= "ISSN: 1234-5678"/>
            </p>
            </div>

          </div>

          
           <Select_language />
         
           <div className="user">
              <div className="data_user">
               <p className="txt_welcome">Bem vindo!</p>
               <p className="txt_email">cleiton_kssa@hotmail.com</p>
              </div>
            
              <img src={print_User} alt="User" className="foto"/>
              </div>

        </header>
  )
}

export default Header;