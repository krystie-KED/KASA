import React from 'react'
import background from '../../assets/bkSection1.svg'
import '../../styles/section1.css'

const Section1 = () => {
    return(
        <div className='section1'>
            <div className='masque'></div>
            <img src={background}  alt='background section 1' />
        </div>
    )

}

export default Section1