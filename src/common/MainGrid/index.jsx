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
import { recommendations } from '../../recommendations'

function index() {
  const [ barConfig, setBarConfig ] = React.useState({})
  const [ pieConfig, setPieConfig ] = React.useState({})
  const [ chartId , setChartId ] = React.useState(0)
  const [ totalEmissions , setTotalEmissions ] = React.useState(0)
  const [ maxEmissionLabel , setMaxEmissionLabel ] = React.useState('')
  const { setUserData, userId } = useData()
  const styles = {
    card: {
        minHeight: '150px',
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
        marginBottom: 'auto'
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
        const emissions = createDataStructureForCharts(data.data, setBarConfig, setPieConfig)
        setTotalEmissions(emissions.totalEmissionsYearly)
        setMaxEmissionLabel(emissions.maxEmissionsCategory)
    }
    fetchData()
  }, [])

  React.useEffect(() => {
    if (recommendations[maxEmissionLabel]) {

      console.log(recommendations[maxEmissionLabel].a)
    }
  }, [totalEmissions])


  return (
        <Grid container spacing={2} style={styles.mainGrid}>
          <Grid item xs={12} lg={6}>
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
          <Grid item xs={12} lg={6} style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}} >
            <Grid container rowSpacing={2} style={{width: '100%', height: '100%'}}>
            <Grid item xs={12}>
              <Card style={styles.card}> 
                  <Typography variant="h5" sx={{ fontSize: 14, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
                      This month you produced on average
                  </Typography>
                  <Typography variant="h4" sx={{ fontSize: 25 }} color="text.secondary" >
                      {(totalEmissions/12).toLocaleString("en-US")} kg of CO<sub>2</sub>
                  </Typography>
              </Card>
              </Grid>
              <Grid item xs={12}>
                <Card style={styles.card}> 
                    <Typography variant="h5" sx={{ fontSize: 14, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
                        This year you produced
                    </Typography>
                    <Typography variant="h4" sx={{ fontSize: 25 }} color="text.secondary" >
                        {totalEmissions.toLocaleString("en-US")} kg of CO<sub>2</sub>
                    </Typography>
                    <CardActions>
                    </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card style={styles.card}> 
                    <Typography variant="h5" sx={{ fontSize: 14, fontWeight: 'bold', padding: '0 20%' }} color="text.secondary" gutterBottom>
                            {maxEmissionLabel && recommendations[maxEmissionLabel].a}
                    </Typography>
                    <CardActions>
                        {maxEmissionLabel && <Button size="small"><a href={recommendations[maxEmissionLabel].link}>Learn more</a></Button>}
                    </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
  )
}

export default index
