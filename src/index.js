import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './styles/index.css'
import Home from './pages/Home'
import Apropos from './pages/Apropos'
// import FicheLogement from './pages/FicheLogement'
import  Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import FicheLogement from './pages/FicheLogement'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Header />
      <Routes>
       <Route exact path='/' element={<Home />} /> 
       <Route exact path='/apropos' element={<Apropos />} /> 
       <Route exact path='/fichelogement/:id' element={<FicheLogement />} />
      </Routes>
    <Footer />
    </Router> 
        
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
