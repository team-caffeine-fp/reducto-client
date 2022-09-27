import React from 'react'
import { MainGrid } from '../../common'

import styles from './index.module.css'


function Dashboard() {
  return (
    <div className={styles.root} data-testid={'dashboard'}>
      <MainGrid />
    </div>
  )
}

export default Dashboard