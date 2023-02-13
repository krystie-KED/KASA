import React from "react"
import {Link} from 'react-router-dom'
import '../styles/error.css'
import styled from "styled-components";

const StyledLinkError = styled(Link)`
    font-size: 10px;
    color: #FF6060;
    @media (width < 600px){
      font-size: 14px;
    }
`

const Error = () => {
    return(
      <div className="error-container">
        <div className="error">
          <h1>404</h1>
          <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
          <StyledLinkError to="/">Retourner sur la page d’accueil</StyledLinkError>  
        </div>  
      </div> 
    )
    
  }
  
  export default Error;
  