import React, {useRef} from 'react'
import Chart from 'chart.js/auto'

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
    <canvas id="myChart" width="400" height="400" ref={pieElem} data-testid='chart'>

    </canvas>

  )
}

export default index