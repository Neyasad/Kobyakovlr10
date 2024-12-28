import React from 'react'
import styles from "./Wish.module.css"

function Wish(props) {
  return (
    <>
        <div className={styles.mid121}>
            <img className={styles.img} src={props.img} alt="pic" />
            <h3 className={styles.mid_h}> {props.title}</h3>
            <p className={styles.Lorem}>Lorem ipsum dolor sit amet consectetur adipisicing elit text{props.sign}</p>
        </div>
    </>
  )
}

export default Wish