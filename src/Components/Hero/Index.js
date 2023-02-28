import React, { useState } from 'react'
import Video from '../../Video/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight}  from './HeroElements'
import { Button } from '../ButtonElement'

const HeroSection = () => {

  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <>
    <HeroContainer id="hero">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Asbestos Testing and Analysis</HeroH1>
            <HeroP>Microtech Sciences Ltd is an independent UKAS accredited asbestos testing laboratory providing a fast and cost effective asbestos analysis service.</HeroP>
            <HeroBtnWrapper>
                <Button to='about' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">Get Started {hover ? <ArrowForward /> : <ArrowRight />}</Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
    </>
  )
}

export default HeroSection