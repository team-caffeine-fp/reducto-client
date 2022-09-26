import React from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Chart } from '../'
import styles from './index.module.css'

function index() {
    const pieConfig = {
        type: 'pie',
        data: {labels: [
            'Red',
            'Blue',
            'Yellow'
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          }],}
    }

      const barData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
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
      const barConfig = {
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
  return (
    <div>
        <Grid container spacing={2} style={{width: '100%'}}>
          <Grid item xs={6}>
              <Chart config={barConfig} />
          </Grid>
          <Grid item xs={6}>
              <Chart config={pieConfig} />
          </Grid>
          <Grid item xs={3} style={{display: 'flex', alignItems: 'center'}} >
              <Card style={{borderRadius: '20px', backgroundColor: "red", width: '100%', padding: '50px', margin: '20px 10px' }}> 
                  <Typography variant="h5" sx={{ fontSize: 14, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
                      This month you produced
                  </Typography>
                  <Typography variant="h4" sx={{ fontSize: 25 }} color="text.secondary" >
                      2.345t of CO<sub>2</sub>
                  </Typography>
                  <CardActions>
                      <Button size="small">Learn More</Button>
                  </CardActions>
              </Card>
          </Grid>
        </Grid>
    </div>
  )
}

export default index