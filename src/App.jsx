import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Companies from './components/Companies/Companies';
import './App.css';
import './AppNew.css'
import Residencies from './components/Residencies/Residencies';
import Values from './components/Values/Values';

const App=() => {
  return (
   <div className="App">
    <div className='child1'>
    <div className="white-gradient"/>
    <Header/>
      <Hero/>   
    </div>
    <Companies/>
    <Residencies/>
    <Values/>
  
   </div>
   
   
  );
}


export default App;

