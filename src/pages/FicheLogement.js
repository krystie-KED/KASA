import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect , useState} from 'react'
import '../styles/fichelogement.css'
import Caroussel from '../components/Caroussel'
import Tag from '../components/Tag'
import Rate from '../components/Rate'
import Dropdown from '../components/Dropdown'



const FicheLogement = () => {
    const {id} = useParams()
    // console.log(id);
    const[data, setData]= useState([])
    const navigate = useNavigate()
    const equipementsLogement = data.equipments?.map((equipement, index) => {
        return <p key={`${index}-${equipement}`}>{equipement}</p>
    })
    

    const getData = () => {
        fetch('http://localhost:3000/logements.json',
        {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            const verif = data.find(logement => logement.id===id)
            setData(verif)
            
            console.log(verif);
            if(verif === undefined){
                console.log('okay');
                navigate('*')
            }
        })    
    }
  
    
    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    
    
    


   return(
    <div>
        <div className='fichelogement'>
            <div>        
                <Caroussel key={data.id} data={data}/>
            </div> 
            <div className='logement'>
                <div className='logement-name'>
                    <h1>{data.title}</h1>
                    <p>{data.location}</p>
                </div>
                <div className='host'>
                    <p>{data?.host?.name}</p>
                    <img src={data?.host?.picture} alt="host" />
                </div>
            </div>
            <div className='tag-rate'>
                <div className='logement-tag'>
                    <Tag key={data.id} data={data} />
                </div>
                <div className='logement-rate'>
                    <Rate key={data.id} data={data} />
                </div>
            </div>
            
        </div>
        <div className="logement-caracteristique">
            <div className='description'> 
                <Dropdown key={data.id} data={data} title="Description" description={data.description} />
            </div>
            <div className='equipements'>    
                <Dropdown  data={data} title="Equipements" description={equipementsLogement} />
            </div>
        </div>
    </div>
   )
}

export default FicheLogement