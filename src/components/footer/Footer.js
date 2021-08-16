import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {

  let today = new Date().toISOString().slice(0, 4)
  return (
    <div className={classes.container}>
      <p>&copy; Jon Prosser {today}</p>

    </div>
  )
}

export default Footer
