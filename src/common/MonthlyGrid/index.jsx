import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

import { Chart } from "../";
import { createDataStructureForPie } from "../../utils";
import { useData } from '../../context'


function MonthlyGrid() {
  const [ pieConfig, setPieConfig ] = React.useState({})
  const [ chartId , setChartId ] = React.useState(0)
  const { userData } = useData()
  let {month} = useParams()
  
  React.useEffect(() => {
    setChartId(prev => prev + 1)
    month = parseInt(month)
    console.log(month)
    createDataStructureForPie(userData, setPieConfig, month)
  }, [month])
  

  return (
    <>
      <Grid container spacing={2} style={{ width: "100%" }}>
        <Grid item xs={6}>
            <Chart config={pieConfig} canvasId={chartId} />
        </Grid>
        <Grid item xs={6}>
            
        </Grid>
      </Grid>
    </>
  );
}

export default MonthlyGrid;
