import React, {useRef} from 'react'
import Chart from 'chart.js/auto'

import styles from './index.module.css'

function index({config, canvasId}) {
  const [ chart, setChart ] = React.useState()
    const pieElem = useRef()
    const attachPie = () => {
      const ctx = pieElem.current
      const pieChart = new Chart(ctx, config)
      setChart(pieChart)
      return pieChart
    }
    React.useEffect(() => {
      const pie = attachPie()
      return () => {
        setChart({})
        pie.destroy()
      }
    }, [config])

  return (
    <div className={styles.root} id={`parent${canvasId}`}>
      <canvas id={`child${canvasId}`} ref={pieElem} data-testid='chart'></canvas>
    </div>

  )
}

export default index