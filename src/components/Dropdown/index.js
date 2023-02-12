import React, {useState} from "react"
import '../../styles/dropdown.css'
import '../../styles/button.css'
import arrow from '../../assets/arrow.svg'


const Dropdown = ({data}) => {
    const [isShown, setIsShown] = useState(false)
    const [isActive, setIsActive] = useState(false)

    const handleClick = (e) => {
        setIsShown(current => !current)
        setIsActive(current => !current)
    }
    
    return(       
              <div className="dropdown">
                    <div className="dropdown-container">
                        <p>Description</p>
                        <div className="button">
                            <button className={isActive ? 'transform' : ''} onClick={handleClick}> 
                                <img src={arrow} alt='arrow' />
                            </button>
                        </div> 
                    </div>
             
                {isShown && (
                    <div className="description">
                        <p>{data.description}</p>
                    </div>
                )}
        </div>    
    )

}

export default Dropdown

