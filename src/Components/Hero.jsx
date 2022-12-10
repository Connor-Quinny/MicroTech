import React from 'react'
import "../Styles/Hero.css"
import video from "../Video/video.mp4"

function Hero() {
  return (
    <section className='HeroContainer'>
        <section className='HeroBg'>
            <video autoPlay muted loop id='video'>
                <source src={video} type="video/mp4"/>
            </video>
        </section>
        <section className='HeroContent'>
        <h1 className='title'>Asbestos Testing and Analysis</h1>
        <p>Microtech Sciences Ltd is an independent UKAS accredited asbestos testing laboratory providing a fast and cost effective asbestos analysis service</p>
        </section>
    </section>
  )
}

export default Hero