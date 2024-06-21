import React from 'react';
import './Hero.css';
import {HiLocationMarker} from 'react-icons/hi'

const Hero =(()=>{
    return(
        <section className="herowrapper">
          
          <div className='paddings flexCenter innerWidth hero-container'>
                  <div className="flexColStart hero-left">
                       <div className="orange-circle"/>
                         <div className="hero-title">
                            <h1 >
                                Discover <br/>
                                Most Suitable <br/>
                                Property
                            </h1>
                         </div>
                         <div className=" flexColStart hero-desc">
                            <span>Find a variety of properties that suit you very easilty</span>
                            <span>Forget all difficulties in finding a residence for you
                            </span>
                         </div>

                         <div className="search-bar">
                    <HiLocationMarker color="var(--blue-gradient)" size='25px' />
                         </div>
                 </div>
            <div className="right-section">
                     <div className="img-container">
                           <img src="./hero-image.png" alt="" />
  </div>
             </div>
             
          </div>

        </section>
    )
})


export default Hero;
