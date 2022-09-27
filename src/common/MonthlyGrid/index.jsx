import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

import { Chart } from "../";
import { createPieChartObject, createBarChartObject } from "../../utils";

function MonthlyGrid() {

  const pieConfig = createPieChartObject(
    ["one", "two", "three", "four", "five"],
    "my title",
    [300, 50, 100, 0, 0]
  );
  const barConfig = createBarChartObject(
    ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    "another title",
    [65, 59, 80, 81, 56, 55, 40]
  );
  return (
    <>
      <Grid container spacing={2} style={{ width: "100%" }}>
        <Grid item xs={6}>
            <Chart config={barConfig}></Chart>
        </Grid>
        <Grid item xs={6}>
            <Chart config={barConfig}></Chart>
        </Grid>
      </Grid>
    </>
  );
}

export default MonthlyGrid;
