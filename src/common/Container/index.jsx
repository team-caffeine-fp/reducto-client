import React from 'react'
import styles from './index.module.css'

const index = ({variant, children}) => {
  return (
    <div className={styles[variant]} >{children}</div>
  )
}

export default index