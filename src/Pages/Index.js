import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar/Index'
import { useState } from 'react'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen)
    }

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    </>
  )
}

export default Home