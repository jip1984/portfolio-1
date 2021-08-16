import React from 'react'
import classes from './Cards.module.css'

const Cards = (props) => {
  return (
    <div className={classes.card}>
      <img src={props.img} alt={props.alt} className={classes.image} />
      {/* <h1 className={classes.title}>{props.title}</h1> */}

    </div>
  )
}

export default Cards
