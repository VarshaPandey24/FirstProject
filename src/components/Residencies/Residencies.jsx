import React from 'react';
import { Swiper,SwiperSlide,useSwiper } from 'swiper/react';
import 'swiper/css';
import './Residencies.css';
import data from  '../../utils/slider.json';
import { sliderSettings } from '../../utils/common';


function Residencies() {
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className='orangeText'>Best Choices</span>
                    <span className='primaryText'>Popular Residencies</span>
            </div>
            <Swiper {...sliderSettings}>
                <sliderButton/>
                {
                    data.map((card,i)=>(
                        <SwiperSlide key ={i}>
                            <div className=" flexColStart r-card">
                                <img src={card.image} alt="" />
                           
                            <div className="secondaryText r-price">
                                <span style ={{color:"orange"}}>$</span>
                                <span>{card.price}</span>
                            </div>
                            <div className="primaryText">{card.name}</div>
                            <div className="secondaryText">{card.detail}</div>
                            </div>
                        </SwiperSlide>
                    )
                )
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies

const sliderButton =()=>{
    const swiper =useSwiper();
    return(
        <div className="r-button">
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    );
};