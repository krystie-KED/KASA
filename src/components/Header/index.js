import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import logokasa from '../../assets/logokasa.svg'
import styled from "styled-components";
import '../../styles/header.css'


const StyledLink = styled(NavLink)`
    width: auto;
    color: #FF6060;
    text-align: right;
    text-decoration: none;
    list-style: none;
    font-style: normal;
    font-weight: 500;
    font-size: 12px; 
    
`
  



const Header = () => {
    return(
        <div className='navigation-kasa'>
          <div className="header-logo">
           <Link to="/"> <img src={logokasa} alt='logo kasa' /></Link>
          </div>

     
          <nav className='menu-navigation'>
            <StyledLink to="/">Acceuil</StyledLink>
            <StyledLink to="/apropos" >A propos</StyledLink>  
          </nav>  
          
           
        </div>
    )
}

export default Header;