import React , {useState} from "react"
import '../../styles/dropDownLarge.css'
import '../../styles/button.css'
import arrow from '../../assets/arrow.svg'

const Dropdownlarge = ({information}) => {
    const [isShown, setIsShown] = useState(false)
    const [isActive, setIsActive] = useState(false)

    const handleClick = (e) => {
        e.stopPropagation()
        setIsShown(current => !current)
        setIsActive(current => !current)
    }



    return(
        
                <div  className="dropDownLarge">
                    <div className="dropDownLargeContainer">
                        <p>{information.title}</p>
                        <div className="button">
                            <button className={isActive ? 'transform' : ''} onClick={handleClick}> 
                                <img src={arrow} alt='arrow' />
                            </button>
                        </div>
                    </div>

                    {isShown && (
                        <div className="description">
                            <p>{information.description}</p>
                        </div>
                    )}
                </div>
           
    )

}

export default Dropdownlarge