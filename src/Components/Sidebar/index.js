import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute  } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about' onClick={toggle}>About
                </SidebarLink>
                <SidebarLink to='discover' onClick={toggle}>Discover
                </SidebarLink>
                <SidebarLink to='services' onClick={toggle}>Services
                </SidebarLink>
                <SidebarLink to='contact' onClick={toggle}>Contact
                </SidebarLink>
            </SidebarMenu>
            {/* <SideBtnWrap>
                <SidebarRoute to='/signup'>Sign Up</SidebarRoute>
            </SideBtnWrap> */}
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar