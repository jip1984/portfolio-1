import React from 'react'
import classes from './Home.module.css'
import code from './../../img/coder.svg'


const Home = () => {
  return (
    <div className={classes.home} id='home'>
      <div className={classes.containerLeft}>

        <h1 className={classes.Hello}><span>Jon Prosser</span></h1>
        <h2>Full Stack Web Developer</h2>
        <h4>I love all aspects of web development especially UI/UX design</h4>
        <a href='https://drive.google.com/u/0/uc?id=1TV_iifZjJIowDobjZXegqd7NeJ08rYx9&export=download'><button className={classes.cvBtn}>Download CV</button></a>

      </div>
      <div className={classes.containerRight}>
        <img className={classes.Code} src={code} alt='coder'></img>
      </div>

    </div>
  )
}

export default Home
