import React from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Chart } from '../'
import styles from './index.module.css'
import { createPieChartObject, createBarChartObject } from '../../utils'
function index() {
  const pieConfig = createPieChartObject(['one', 'two', 'three'], 'my title', [300, 50, 100])
  const barConfig = createBarChartObject(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], 'another title', [65, 59, 80, 81, 56, 55, 40])
  
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