import React from 'react'
import classes from './Skills.module.css'
import PageHeader from './../PageHeader/PageHeader'
import Cards from './../../components/cards/Cards'
import html from './../../img/html2.png'
import js from './../../img/js2.jpg'
import css from './../../img/css1.png'
import react from './../../img/react1.png'
import node from './../../img/node4.png'
import bootstrap from './../../img/bootstrap.png'
import post from './../../img/postgresql.png'
import mongo from './../../img/mongodb.png'
import vue from './../../img/Vue-logo.svg'

const tech = [
  {
    id: 1,
    img: html,
    alt: 'html',
    title: 'HTML',
  },
  {
    id: 2,
    img: css,
    alt: 'css',
    title: 'CSS',
  },
  {
    id: 3,
    img: js,
    alt: 'js',
    title: 'JavaScript',
  },

  {
    id: 4,
    img: react,
    alt: 'react',
    title: 'React',
  },

  {
    id: 5,
    img: node,
    alt: 'node',
    title: 'Node.js',
  },

  {
    id: 6,
    img: vue,
    alt: 'vue.js',
    title: 'vue',
  },
  {
    id: 7,
    img: bootstrap,
    alt: 'bootstrap',
    title: 'Bootstrap',
  },
  {
    id: 8,
    img: post,
    alt: 'postgres',
    title: 'PostgresSQL',
  },
  {
    id: 9,
    img: mongo,
    alt: 'MongoDb',
    title: 'PostgresSQL',
  },


]


const Skills = () => {


  return (
    <div id='skills'>
      <PageHeader title={'My Skills'} />
      <div className={classes.container} >


        <div className={classes.textContainer}>
          <h1>My Skills</h1>
          <p>I have used the main three technologies HTML, CSS and Javascript to build many small projects to learn the basics of web development. Learning these technologies in depth really have helped me on my journey into web development. I have a great deal of experience building single page applications(spa) using the react.js framework. I have excellent UI/UX design skills and a very keen eye for the way something should look. All the applications that I make are built responsively and look great on both mobile and desktop.</p>
          <p></p>

        </div>
        <div className={classes.skillsContainer}>
          {tech.map((tec) => <Cards
            key={tec.key}
            title={tec.title}
            img={tec.img}
            alt={tec.alt}
          />)}
        </div>
      </div>
    </div>
  )
}

export default Skills
