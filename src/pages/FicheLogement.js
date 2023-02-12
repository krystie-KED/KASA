import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect , useState} from 'react'
import '../styles/fichelogement.css'
import Caroussel from '../components/Caroussel'
import Tag from '../components/Tag'
import Rate from '../components/Rate'
import Dropdown from '../components/Dropdown'
import Dropdownb from '../components/Dropdown/indexb'

const FicheLogement = () => {
    const {id} = useParams()
    console.log(id);

    const[data, setData]= useState([])

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
            // console.log(data);
            
            setData(data.find(logement => logement.id===id))
        });
    }
    useEffect(() => {
        getData()
    }, [])

    console.log(data);



   return(
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
                <p>{data.host.name}</p>
                <img src={data.host.picture} alt="host" />
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
        <div className="logement-caracteristique">
            <div className='description'>
            <Dropdown key={data.id} data={data} />
            </div>
            <div className='equipements'>
            <Dropdownb key={data.id} data={data} />
            </div>
        </div>
    </div>
   )
}

export default FicheLogement