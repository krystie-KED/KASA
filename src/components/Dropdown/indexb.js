import React, {useState} from "react"
import '../../styles/dropdown.css'
import '../../styles/button.css'
import arrow from '../../assets/arrow.svg'


const Dropdownb = ({data}) => {
    const [isShown, setIsShown] = useState(false)
    const [isActive, setIsActive] = useState(false)
    
    const handleClick = (e) => {
        setIsShown(current => !current)
        setIsActive(current => !current)
    }

    const equipements = data.equipments
    console.log(data)

    
    return(                   
              <div className="dropdown">
                    <div className="dropdown-container">
                        <p>Equipements</p>
                        <div className="button">
                            <button className={isActive ? 'transform' : ''} onClick={handleClick}> 
                                <img src={arrow} alt='arrow' />
                            </button>
                        </div> 
                    </div>
             
                    {isShown && (
                        <div>
                            {equipements.map((equipement, index) => (
                                <div key={`${index}-${equipement}`} className="description">
                                    <p>{equipements[index]}</p>
                                </div>
                           ))}
                        </div>
                    )}
                </div>   
    )

}

export default Dropdownb

