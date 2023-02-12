import React from 'react';
import logofooter from '../../assets/logofooter.svg'
import '../../styles/footer.css'

const Footer = () => {
    return(
        <div className='footer'>
            <img src={logofooter}  alt='logo kasa' />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer