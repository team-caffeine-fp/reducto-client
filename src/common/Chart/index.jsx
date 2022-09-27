import React, {useRef} from 'react'
import Chart from 'chart.js/auto'

import styles from './index.module.css'

function index({config}) {
    const pieElem = useRef()
    const attachPie = () => {
        const ctx = pieElem.current
        const pieChart = new Chart(ctx, config)
    }
    React.useEffect(() => {
        attachPie()
    })
  return (
    <div className={styles.root}>
      <canvas id="myChart" ref={pieElem} data-testid='chart'></canvas>
    </div>

  )
}

export default index