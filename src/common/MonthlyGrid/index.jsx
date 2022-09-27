import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

import { Chart } from "../";
import { createPieChartObject, createBarChartObject, createDataStructureForCharts } from "../../utils";
import { useData } from '../../context'


function MonthlyGrid() {
  const [ barConfig, setBarConfig ] = React.useState({})
  const [ pieConfig, setPieConfig ] = React.useState({})
  const [ chartId , setChartId ] = React.useState(0)
  const { userData } = useData()

  React.useEffect(() => {
    setChartId(prev => prev + 1)
    createDataStructureForCharts(userData, setBarConfig, setPieConfig)
  }, [])
  

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
