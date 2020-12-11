import React, {useState,useEffect} from 'react';
//import {IconName} from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from 'react-router-dom';
import {IconContext} from 'react-icons';
import logoImg from '../images/logoImg.svg';
import{SidebarData} from './SidebarData';
import '../styles/elements/navbar.css';

import doi from "../images/menu_hamburguer.svg"
//import  Menu_hamburguer from './menu_hamburguer'



function Navbar() {
    const [sidebar,setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);
   
    const [changeOFF,setChangeOFF] = useState(false);


    document.body.onload = function() {
        if(((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) < 1380)){
            setChangeOFF (true);
        }else{
            setChangeOFF (false);
        }
    }
    
    document.body.onresize = function() {
        
        var x = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (x < 1380) {
            setChangeOFF (true);

            return (()=>{Navbar()})
            
        }else{
            setChangeOFF (false);
            //console.log(`${x}`)
            //console.log(`${changeOFF}`)
            setSidebar(true)            //console.log(`${x}`)
            //console.log(`${changeOFF}`)
           return (()=>{Navbar()})
        }
    }
   
    return (
    <div id ="nav">
        <IconContext.Provider value={{color:'#EE7A3A'}}>
           <div className={changeOFF ? '' : "menu_hamburguer"}>
            <Link to="#" className="menu-bars">
               <FaIcons.FaBars  onClick ={()=>changeOFF ? setSidebar(!sidebar) : ' '} className="navbar" />
             </Link>
           </div>

            <nav className = {sidebar ? 'nav-menu active':'nav-menu'} >   
                <ul className="nav-menu-items"
                 onClick ={()=>changeOFF ? setSidebar(!sidebar) : ''}
                >
                    <div className = "slaca">
                     <p>SLACA2019</p>
                    </div>
                    <img src={logoImg} alt="Logo"/>
                    {/*aqui ia o bt_fechar*/}
                    <li className ="nav-toglle">
                    <Link to="#" className = {changeOFF ? '':"esconder_X"}>
                        <AiIcons.AiOutlineClose  className='menu-bars'/>
                    </Link>
                    </li>
                    
                    {SidebarData.map((item, index) =>{
                      return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                            {/* {item.icon}*/}
                            <span>{item.title}</span>
                            </Link>
                        </li>
                      )
                     })
                    }   
                </ul>
            </nav>
            </IconContext.Provider>
        </div>
    )
}

export default Navbar
