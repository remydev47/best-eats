import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Featured1 from '../assets/images/featured1.png'
import Featured2 from '../assets/images/featured2.png'
import Featured3 from '../assets/images/featured3.png'
import Featured4 from '../assets/images/featured4.png'

const HeroBanner = () => {
  return (
    <section className={styles.carousel}>
       <Carousel 
             autoPlay
             infiniteLoop
             showStatus={false}
             showIndicators={false}
             showThumbs={false}
             interval={5000}
            >
                <div>
                    <img loading="lazy" src= {Featured1} alt="" />
                </div>
                <div>
                    <img loading="lazy" src={Featured3} alt="" />
                </div>
                <div>
                    <img loading="lazy" src={Featured4} alt="" />
                </div>
                <div>
                    <img loading="lazy" src={Featured2} alt="" />
                </div>
            </Carousel>    
    </section>
  )
}

export default HeroBanner


const styles={
   carousel:`bg-[#d1411e] h-[(100vh-100px)] relative mt-1 shadow-2xl mx-auto`,
}