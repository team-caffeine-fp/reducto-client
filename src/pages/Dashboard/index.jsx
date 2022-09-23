import React from 'react'
import { SideBar, MainGrid } from '../../common'

import styles from './index.module.css'


function Dashboard() {
  return (
    <div className={styles.root}>
      <SideBar />
      <MainGrid />
    </div>
  )
}

export default Dashboard