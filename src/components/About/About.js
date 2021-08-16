import React from 'react'
import classes from './About.module.css'
import PageHeader from './../PageHeader/PageHeader'
import me from './../../img/me2.jpg'

const About = () => {
  return (
    <div className={classes.aboutMe}>
      <PageHeader title={'About Me'} />
      <div className={classes.container}>
        <div className={classes.photo}>
          <img src={me} alt="me" className={classes.me} />

        </div>
        <div className={classes.text}>
          <h2>Hey I am Jon</h2>
          <p>A full stack web developer from Birmingham, UK.
            I have a huge passion for tech and love to learn new things all the time. I started out in the construction industry and through self study and a 9 month boot camp I now call my self a software engineer than a tradesman. I love creating websites and new software that can improve peoples lives and business. I love traveling and sampling different culture and foods from around the world. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minima odit neque provident, debitis iusto. Sapiente magnam possimus nobis porro est, ab repudiandae. Quaerat laboriosam sint fuga nulla beatae cumque id nesciunt illo! Veritatis tempora magni ab? Alias, optio fugiat, modi corrupti veritatis placeat praesentium quam cum expedita vitae fugit?
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
