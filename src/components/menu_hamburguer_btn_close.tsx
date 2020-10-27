import React, {useState} from 'react';
//import {IconName} from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from 'react-router-dom';
import {IconContext} from 'react-icons';
import logoImg from '../images/logoImg.svg';
import{SidebarData} from './SidebarData';
import '../styles/elements/navbar.css';


function menu_hamburguer_btn_close() {
    return (
          <div>                      
            <li className ="nav-toglle">
                <Link to="#" className='menu-bars'>
                <AiIcons.AiOutlineClose/>
                </Link>
            </li>
        </div>    
    )
}

export default menu_hamburguer_btn_close
