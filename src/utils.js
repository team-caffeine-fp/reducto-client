//TODO loop through the amount of data and create additional colors 

export const createPieChartObject = (labels, title, data) => {
    return {
        type: 'pie',
        data: {labels: labels,
          datasets: [{
            label: title,
            data: data,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(20, 99, 132)',
              'rgb(54, 162, 50)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          }],}
    }
}

export const createBarChartObject = (labels, title, data) => {
    const barData = {
        labels: data,
        datasets: [{
          label: title,
          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      }
    return {
        type: 'bar',
        data: barData,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
      }
    }