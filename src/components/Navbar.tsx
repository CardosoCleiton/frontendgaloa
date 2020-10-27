import React, {useState} from 'react';
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
    return (
    <div id ="nav">
        <IconContext.Provider value={{color:'#EE7A3A'}}>
             {/*aqui ia o humburguer*/}
             {/*<Menu_hamburguer/>*/}
           <div>
            <Link to="#" className="menu-bars">
               <FaIcons.FaBars onClick={showSidebar} className="navbar" />
                 {/*<img src={doi} alt="" onClick={showSidebar} className="navbar" />*/}
             </Link>
           </div>

            <nav className = {sidebar ? 'nav-menu active' : 'nav-menu' } >   
                <ul className="nav-menu-items" onClick={showSidebar}>
                <div className = "slaca">
                <p>SLACA2019</p>
                </div>
        
                <img src={logoImg} alt="Logo"/>


                {/*aqui ia o bt_fechar*/}
                <li className ="nav-toglle">
                   <Link to="#" >
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
                    })}   
                </ul>
            </nav>
            </IconContext.Provider>
        </div>
    )
}

export default Navbar
