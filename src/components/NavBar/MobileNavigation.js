import React, { useState } from 'react'
import NavLinks from './NavLinks'
import classes from './NavBar.module.css'
import { CgMenu } from 'react-icons/cg'
import { CgCloseO } from 'react-icons/cg'

const MobileNavigation = () => {

  const [open, setOpen] = useState(false)

  const hamburgerIcon = <CgMenu className={classes.hamburger} size='40px' color='#fff' onClick={() => setOpen(!open)} />

  const closeIcon = <CgCloseO className={classes.hamburger} size='40px' color='#fff' onClick={() => setOpen(!open)} />

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className={classes.mobileNavigation}>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMenu={closeMobileMenu} />}
    </nav>
  )
}

export default MobileNavigation
