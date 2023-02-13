import React from 'react'
import background from '../../assets/backgroundb.png'
import '../../styles/section1b.css'

const Section1 = () => {
    return(
        <div className='section1 imgsize'>
            <div className='masque '></div>
            <img src={background}  alt='background section 1' />
        </div>
    )

}

export default Section1