import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar/Index'
import { useState } from 'react'
import HeroSection from '../Components/Hero/Index'
import Services from '../Components/Services/Index'
import { homeObjOne, homeObjTwo } from '../Components/InfoSection/Data'
import InfoSection from '../Components/InfoSection/Index'
import Footer from '../Components/Footer/Index'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen)
    }

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <HeroSection />
    <InfoSection {...homeObjOne}/>
    <InfoSection {...homeObjTwo}/>
    <InfoSection {...homeObjOne}/>
    <Services />
    <Footer />
    </>
  )
}

export default Home