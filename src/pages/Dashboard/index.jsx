import React from 'react'
import { SideBar, MainGrid } from '../../common'

import styles from './index.module.css'


function Dashboard() {
  return (
    <div className={styles.root}>
      <MainGrid />
    </div>
  )
}

export default Dashboard