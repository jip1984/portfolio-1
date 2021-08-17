import React from 'react'


const NavLinks = (props) => {
  return (
    <ul>
      <li onClick={() => props.isMobile && props.closeMenu()}>
        <a href='/#home'>Home</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMenu()}>
        <a href='/#about'>About Me</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMenu()}>
        <a href='/#skills'> My Skills</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMenu()}>
        <a href='/#projects'>My Projects</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMenu()}>
        <a href='/#contact'>Contact</a>
      </li>
    </ul>
  )
}

export default NavLinks
