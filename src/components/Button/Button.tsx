import React, { FC } from 'react'
import styles from "./Button.module.scss";



export const Button:FC = ({children}) => {
  return (
    <div className={styles.Button}>{children}</div>
  )
}
