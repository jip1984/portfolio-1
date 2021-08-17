import React from 'react'
import classes from './About.module.css'
import PageHeader from './../PageHeader/PageHeader'
import me from './../../img/source.svg'

const About = () => {
  return (
    <div id='about'>
      <div className={classes.aboutMe} >

        <PageHeader title={'About Me'} />
      </div>
      <div className={classes.container}>
        <div className={classes.photo}>
          <img src={me} alt="me" className={classes.source} />

        </div>
        <div className={classes.text}>
          <h2>Hey I am Jon</h2>
          <p>A full stack web developer from Birmingham, UK.
            I have a huge passion for tech and love to learn new things all the time. I started out in the construction industry and through self study and a 9 month boot camp I now call my self more a software engineer than a tradesman. I love creating websites and new software that can improve peoples lives and businesses. I love traveling and sampling different culture from around the world.
          </p>
          <br></br>
          <p>I have strong front end skills and a keen eye for good design and user experience. I really enjoy front end development and have experience with both react.js and vue.js. I have created a few full stack apps, using node express and both mongoDB and PostgresSQL as the databases</p>
        </div>
      </div>
    </div>

  )
}

export default About
