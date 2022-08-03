import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HeroBanner = () => {
  return (
    <section>
       <Carousel 
             autoPlay
             infiniteLoop
             showStatus={false}
             showIndicators={false}
             showThumbs={false}
             interval={5000}
            >
                <div>
                    <img loading="lazy" src= "../assets/images/featured4.png" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="../assets/images/featured3.png" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="../assets/images/featured2.png" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="../assets/images/featured1.png" alt="" />
                </div>
            </Carousel>    
    </section>
  )
}

export default HeroBanner


const styles={

}