import React from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


function index() {
    const labels = ["2010", "2012", "2014", "2016", "2018"]
    const datasets = [
      {
        data: [2000, 4000, 2300, 2222, 3333],
        backgroundColor: ["#003f5c", "#58508d", "#bc5090", "#ff6361", "#ffa600"]
      }
    ]
  return (
    <div>
        <Grid container spacing={2}>
        <Grid item xs={8}>
            <Card> 
                <Typography variant="h5" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    This month you produced
                </Typography>
                <Typography variant="h3" sx={{ mb: 1.5 }} color="text.secondary">
                    2.345t of CO<sub>2</sub>
                </Typography>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid item xs={4}>

        </Grid>
        <Grid item xs={4}>
            This is xs = 4
        </Grid>
        <Grid item xs={8}>
            This is xs = 8
        </Grid>
        </Grid>
    </div>
  )
}

export default index