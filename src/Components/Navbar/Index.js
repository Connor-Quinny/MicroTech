import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, ImgLink } from './NavbarElement'
import img from '../../Images/logo2.png'
import {Link} from 'react-router-dom'

function Navbar2({toggle}) {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo src={img} onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}></NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover">Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">Contact</NavLinks>
                    </NavItem>
                </NavMenu>
                {/* <NavBtn to='contact'>
                    <NavBtnLink to="contact">Contact</NavBtnLink>
                </NavBtn> */}
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar2