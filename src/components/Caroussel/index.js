import React, {useRef, useState} from "react"
import '../../styles/caroussel.css'

const Carroussel = ({data}) => {
    const pictures = data.pictures
    const caroussel = useRef()
    const [count, setCount]= useState(0)
        

    const incrementCaroussel = delta => {
        if(!caroussel.current) return
        
        const width = caroussel.current.offsetWidth

        if(count + delta > pictures.length - 1){
            setCount(0);
            caroussel.current.scrollTo(0 , 0)
            return
            
        }else if(count + delta < 0){
            setCount(pictures.length - 1)
            caroussel.current.scrollTo(width * pictures.length - 1, 0)
            return
        }
        caroussel.current.scrollTo(
            caroussel.current.scrollLeft + width * delta,
            0
        )
        setCount(c => c + delta)
    }

    if(pictures?.length === 1){
        return(
            <div className="caroussel-container">
                <div className="caroussel" ref={caroussel}>
                    {pictures?.map((img, index) => (
                        <div key={`${index}-${img}`} className="caroussel-item">
                            <img src={img} alt="logement" />
                            <p>{index +1 }/{pictures.length}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }



    return(
        <div className="caroussel-container">
            <div className="caroussel-btn left-btn" 
                onClick={() => incrementCaroussel(-1)} />
            <div className="caroussel-btn right-btn"
                onClick={() => incrementCaroussel(1)}/>

            <div className="caroussel" ref={caroussel}>
                {pictures?.map((img, index) => (
                    <div key={`${index}-${img}`} className="caroussel-item">
                        <img src={img} alt="logement" />
                        <p>{index +1 }/{pictures.length}</p>
                    </div>
                ))}
            </div>
            
        </div>
    )

}

export default Carroussel