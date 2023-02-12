import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/gallery.css'
import styled from "styled-components";

const StyledLink = styled(Link)`
   width: 140px;
   margin: 20px;

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