import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import axios from "axios";

import { Chart } from "../";
import { createDataStructureForPie } from "../../utils";
import { useData } from '../../context'
import { herokuUrl } from '../../settings';



function MonthlyGrid() {
  const [ pieConfig, setPieConfig ] = React.useState({})
  const [ chartId , setChartId ] = React.useState(0)
  const { setUserData, userId } = useData()

  let {month} = useParams()
  
  React.useEffect(() => {
    const fetchData = async () => {
      const options = {
              headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("token") 
          }}

      const data = await axios.get(herokuUrl + '/users/' + userId, options)
      setChartId(prev => prev + 1)
      setUserData(data.data)
      month = parseInt(month)
      console.log(month)
      createDataStructureForPie(data.data, setPieConfig, month)
    }
    fetchData()
    
  }, [month])
  const styles = {
    grid: {
      margin: 'auto',
      width: '70%',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      padding: '20px',
      borderRadius: '20px',

    }
  }

  return (
    <>
      <Grid container spacing={2} style={styles.grid}>
        <Grid item xs={12} >
            <Chart config={pieConfig} canvasId={chartId} />
        </Grid>
      </Grid>
    </>
  );
}

export default MonthlyGrid;
