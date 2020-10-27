import React, {useState} from 'react';
//import {IconName} from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from 'react-router-dom';
import {IconContext} from 'react-icons';
import logoImg from '../images/logoImg.svg';
import{SidebarData} from './SidebarData';
import '../styles/elements/navbar.css';

function Menu_hamburguer() {

    const [sidebar,setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);
    
    return (
        <div className="navbar">
            <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
            </Link>
       </div>
    )
}

export default Menu_hamburguer
