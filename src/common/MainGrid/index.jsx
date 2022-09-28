import React from 'react'
import axios from 'axios'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Chart, Container } from '../'
import styles from './index.module.css'
import { createPieChartObject, createBarChartObject, createDataStructureForCharts } from '../../utils'
import { userId, herokuUrl } from '../../settings';
import { useData } from '../../context'


function index() {
  const [ barConfig, setBarConfig ] = React.useState({})
  const [ pieConfig, setPieConfig ] = React.useState({})
  const [ chartId , setChartId ] = React.useState(0)
  const { setUserData, userId } = useData()
  const styles = {
    card: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '0px',
        boxShadow: 'none',
        justifyContent: 'center'
    },
    mainGrid: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '10px',
        padding: '0 10px',
        width: '90%',
    },
    pieChart: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '0px',
        boxShadow: 'none',
        marginBottom: '15px'
    },
    barChart: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '0px',
        boxShadow: 'none',
    }
  }
  React.useEffect(() => {
    const fetchData = async () => {
        const options = {
                headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token") 
            }}

        const data = await axios.get(herokuUrl + '/users/' + userId, options)
        setChartId(prev => prev + 1)
        setUserData(data.data)
        console.log(data.data)
        createDataStructureForCharts(data.data, setBarConfig, setPieConfig)
    }
    fetchData()
  }, [])


  return (
        <Grid container spacing={2} style={styles.mainGrid}>
          <Grid item xs={6}>
          <Grid container spacing={2}>

            <Grid item xs={12}>

            <Card style={styles.barChart}> 
              <Chart config={barConfig} canvasId={chartId} />
            </Card>
            </Grid>
            <Grid item xs={12}>

            <Card style={styles.pieChart}> 
              <Chart config={pieConfig} canvasId={chartId}/>
            </Card>
          </Grid>
          </Grid>
          </Grid>
          <Grid item xs={6} style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}} >
            <Grid container rowSpacing={2} style={{width: '100%', height: '100%'}}>
            <Grid item xs={12}>
              <Card style={styles.card}> 
                  <Typography variant="h5" sx={{ fontSize: 14, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
                      This month you produced
                  </Typography>
                  <Typography variant="h4" sx={{ fontSize: 25 }} color="text.secondary" >
                      0.345t of CO<sub>2</sub>
                  </Typography>
              </Card>
              </Grid>
              <Grid item xs={12}>
                <Card style={styles.card}> 
                    <Typography variant="h5" sx={{ fontSize: 14, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
                        This year you produced
                    </Typography>
                    <Typography variant="h4" sx={{ fontSize: 25 }} color="text.secondary" >
                        2.345t of CO<sub>2</sub>
                    </Typography>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card style={styles.card}> 
                    <Typography variant="h5" sx={{ fontSize: 14, fontWeight: 'bold', padding: '0 20%' }} color="text.secondary" gutterBottom>
                            See the recommendations we've got for you!
                    </Typography>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
  )
}

export default index
