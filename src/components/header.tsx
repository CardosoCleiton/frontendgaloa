//import React from 'react';
import React, {useState} from 'react';
import '../styles/elements/navbar.css';
import '../styles/elements/header.css';
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
  return (
       <header id="header">

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

          <div className="div_top_user" > 
            <div className="language">
            <select>
            <option  value="0"> PT/BR </option>
              <option value="1">Português</option>
              <option value="2">English</option>
              <option value="3">Chinês</option>
              <option value="4">Alemão</option>
            </select>
            <span className="custom-arrow"></span>
            </div>


            <div className="user">
              <div className="data_user">
              <p className="txt_welcome">Bem vindo!</p>
              <p className="txt_email">cleiton_kssa@hotmail.com</p>
              </div>
          </div>
            <img src={print_User} alt="User" className="foto"/>
          </div>

        </header>
  )
}

export default Header;