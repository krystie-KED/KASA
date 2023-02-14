import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/gallery.css'
import styled from "styled-components";

const StyledLink = styled(Link)`
   width: 200px;
   margin: 20px;
   @media (width < 600px){
    width : 100%;
    margin : 0;
    margin-bottom: 5%;
   }
    `

const Gallery = ({data}) => {   
    console.log(data);

    

    return(
            <StyledLink to={`/fichelogement/${data.id}`}>
                <div className='thumb'>
                    <img src={data.cover} alt='couverture' />
                    <h3>{data.title}</h3>
                </div>
            </StyledLink>                            
    )
}


export default Gallery