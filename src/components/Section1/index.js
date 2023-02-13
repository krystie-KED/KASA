import React from 'react'
import background from '../../assets/background.png'
import '../../styles/section1.css'

const Section1 = () => {
    return(
        <div className='section1'>
            <div className='masque'></div>
            <h1>Chez vous, partout et ailleurs</h1>
            <img src={background}  alt='background section 1' />
        </div>
    )

}

export default Section1