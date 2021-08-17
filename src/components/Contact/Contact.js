import React from 'react'
import classes from './Contact.module.css'
import contact from './../../img/contact.svg'
import PageHeader from './../PageHeader/PageHeader'
import CallIcon from '@material-ui/icons/Call';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import Footer from './../footer/Footer'

const Contact = () => {
  return (
    <div>
      <PageHeader title={'Contact Me'} />
      <div className={classes.contactContainer} id='contact'>
        <div className={classes.containerLeft}>
          <img src={contact} alt="contact" className={classes.img} />
        </div>
        <div className={classes.containerRight}>
          <ul>
            <li><CallIcon /><p>07825638825</p></li>
            <li><AlternateEmailIcon /><p>jonprosser84@gmail.com</p></li>
            <li><GitHubIcon /><p>https://github.com/jip1984</p></li>
            <li><LinkedInIcon /><p>https://www.linkedin.com/in/jon-prosser/</p></li>
            <li><TwitterIcon /><p>@JonProsser10</p></li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Contact
