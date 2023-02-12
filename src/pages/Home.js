import React from 'react'
import { useState, useEffect } from 'react'
import Section1 from '../components/Section1'
import Gallery from '../components/Gallery'
import '../styles/home.css'

const Home = () => {
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
          console.log(data);
          setData(data)
      });
  }
  useEffect(() => {
      getData()
  }, [])


  return(
    <div>
      <Section1 />
      <div className='gallery' >
        {data && data.length>0 && data.map((data) => ( 
            <Gallery key={data.id} data={data}/>
        ))}
      </div>
    </div>    
  )
  
}

export default Home
