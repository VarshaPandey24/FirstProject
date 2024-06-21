import React from 'react';
import header from 'src/components/Header/Header';
import Hero from 'src/components/Hero/Hero';


const App=() => {
  return (
   <div className="App">
    <div>
    <div className="white-gradient">
      <Hero/>
      <Header/>
    </div>
    </div>
  
   </div>
   
  );
}


export default App;

