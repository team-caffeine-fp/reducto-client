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

  React.useEffect(() => {
    const fetchData = async (setBarConfig, setPieConfig, setChartId) => {
        const options = {
            headers: new Headers({
                'Authorization': userId
            })}

        const data = await axios.get(herokuUrl + '/users/' + userId, options)
        setChartId(prev => prev + 1)
        setUserData(data.data)
        console.log(data.data)
        createDataStructureForCharts(data.data, setBarConfig, setPieConfig)
    }
    fetchData(setBarConfig, setPieConfig, setChartId)
  }, [])


  return (
    <Container variant={'mainGrid'}>
        <Grid container spacing={2} style={{width: '100%'}}>
          <Grid item xs={8}>
              <Chart config={barConfig} canvasId={chartId} />
              <Chart config={pieConfig} canvasId={chartId}/>
          </Grid>
          <Grid item xs={4} style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}} >
              <Card style={{flexBasis: '30%', borderRadius: '20px', boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)', backgroundColor: "red", width: '100%', padding: '50px', marginBottom: '30px' }}> 
                  <Typography variant="h5" sx={{ fontSize: 14, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
                      This month you produced
                  </Typography>
                  <Typography variant="h4" sx={{ fontSize: 25 }} color="text.secondary" >
                      2.345t of CO<sub>2</sub>
                  </Typography>
              </Card>
              <Card style={{flexBasis: '30%', borderRadius: '20px', boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)', backgroundColor: "green", width: '100%', padding: '50px', marginBottom: '30px' }}> 
                  <Typography variant="h5" sx={{ fontSize: 14, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
                        See the recommendations we've got for you!
                  </Typography>
                  <CardActions>
                      <Button size="small">Learn More</Button>
                  </CardActions>
              </Card>
              <Card style={{flexBasis: '30%', borderRadius: '20px', boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',  backgroundColor: "yellow", width: '100%', padding: '50px', marginBottom: '30px' }}> 
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
    </Container>
  )
}

export default index
