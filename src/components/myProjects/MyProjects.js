import React from 'react'
import PageHeader from './../PageHeader/PageHeader'
import classes from './MyProjects.module.css'
import cyf from './../../img/cyf.png'
import color from './../../img/color-flipper.png'
import menu from './../../img/menu.png'
import tv from './../../img/tv-show.png'

const MyProjects = () => {
  return (
    <div id='projects'>
      <PageHeader title={'My Projects'} />
      <div className={classes.parent} >
        <div className={classes.div1}>
          <img src={color} alt="color-flipper app" className={classes.myProjects} />
          <div className={classes.textContainer}>
            <h3>Color Flipper</h3>
            <p>This was a simple color flipper application where you can get random hex codes at the click of a button. This really tested my understanding of javascript</p>
          </div>
          <div className={classes.btnContainer}>
            <a href="jip1984-color-flipper.netlify.app"><button className={classes.btnProj}>See Preview</button></a>
            <a href="https://github.com/jip1984/my-color-flipper"><button className={classes.btnProj}>Source Code</button></a>
          </div>

        </div>
        <div className={classes.div2}>
          <img src={tv} alt="tv-show" className={classes.myProjects} />
          <div className={classes.textContainer}>
            <h3>TV Show Project</h3>
            <p>This is a project built with javascript and dom manipulation to make a tv show application. This called the data from an api and presented in a clean functional way.</p>
          </div>
          <div className={classes.btnContainer}>
            <a href="cyf-jip1984-tv.netlify.app"><button className={classes.btnProj}>See Preview</button></a>
            <a href="https://github.com/jip1984/tv-show-dom-project"><button className={classes.btnProj}>Source Code</button></a>
          </div>
        </div>
        <div className={classes.div3}>
          <img src={menu} alt="menu app" className={classes.myProjects} />
          <div className={classes.textContainer}>
            <h3>React Menu</h3>
            <p>This is a application built using react which is a lovely presented menu example a restaurant may use on there website. </p>
          </div>
          <div className={classes.btnContainer}>
            <a href="https://food-menu-jp.netlify.app"><button>See Preview</button></a>
            <a href="https://github.com/jip1984/React-Menu"><button>Source Code</button></a>
          </div>
        </div>
        <div className={classes.div4}>
          <img src={cyf} alt="cyf project" className={classes.myProjects} />
          <div className={classes.textContainer}>
            <h3>CYF Register</h3>
            <p>This is a full stack application that helps track students attendance. We implemented all the technologies we learnt across my boot-camp and some new ones too.</p>
          </div>
          <div className={classes.btnContainer}>
            <a href="https://access-denied.herokuapp.com"><button>See Preview</button></a>
            <a href="https://github.com/liewteh/access-denied"><button>Source Code</button></a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MyProjects
