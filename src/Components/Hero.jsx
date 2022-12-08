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
        <h1 className='title'>Asbestos Testing and Analysis</h1>
    </section>
  )
}

export default Hero