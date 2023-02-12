import React from "react";
import '../styles/error.css'

const Error = () => {
    return(
      <div className="error">
        <h1>404</h1>
        <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
        <p className="link-retour">Retourner sur la page d’accueil</p>
      </div>   
    )
    
  }
  
  export default Error;
  