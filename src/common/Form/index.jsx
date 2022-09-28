import * as React from 'react';
import { Box, Button, Card, CardContent, FormControl, FormHelperText, MenuItem, InputAdornment, InputLabel, OutlinedInput, Select, Typography } from '@mui/material'

import { fetchDataFromApi } from '../../utils' 
import { useData } from '../../context'

export default function InputAdornments({data, category}) {
  const { userId } = useData()
  const jsfiyString = (str) => {
    return str.replaceAll(' ', '_').toLowerCase()
  }
  const createStartingObject = () => {
    let obj = {}
    for (let attr of data.fields) {
      if(attr.options.length > 0) {
          obj[attr.name] = attr.options[0]
      } else {
          obj[attr.name] = ''
      }
    }
    return obj
  }
  const [values, setValues] = React.useState(createStartingObject())
  const [ fetchedData, setFetchedData ] = React.useState(null)
  const handleChange = e => {
    const newInput = e.target.value
    console.log(values)
    setValues(prev =>{return {...prev, [e.target.name]: newInput}})
  }
  React.useEffect(() => {
    setValues(createStartingObject())
  }, [data])
  const handleSubmit = () => {
    const cat = category
    const data = fetchDataFromApi(values, cat, setFetchedData, userId)
    console.log(data)
  }

  React.useEffect(() => {
    if (fetchedData) {
      console.log('This should be sent to the db: ', fetchedData.co2e, category)
    }
  }, [fetchedData])

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        {data.fields.map((f, i) => {
            if(f.options.length == 0) {
                return <FormControl key={i} sx={{ m: 1, width: '40%' }} variant="outlined">
                <OutlinedInput
                id={f.name}
                aria-describedby={`${f.name}-text`}
                endAdornment={f.units ? <InputAdornment position="start">{f.units[0]}</InputAdornment> : ''}
                inputProps={{
                    'aria-label': `${f.name}`,
                }}
                name={f.name}
                onChange={handleChange}
                value={values[f.name]}
                />
                <FormHelperText id={`${f.name}-text`}>{f.name}</FormHelperText>
            </FormControl>
            } else {
                return <FormControl fullWidth key={i}>
                    <InputLabel id="demo-simple-select-label">{f.name}</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label={f.name}
                    onChange={handleChange}
                    name={f.name}
                    value={values[f.name]}
                    >
                    {f.options.map((o, ind) => <MenuItem key={ind} value={o}>{o}</MenuItem>)}
                    </Select>
                </FormControl>
            }
        })}
        <Button variant="contained" onClick={handleSubmit} style={{margin: '20px 0'}}>Submit</Button>
      </div>
      { fetchedData ?     
      (<Box style={{display: 'block'}}>
        <Card sx={{ minWidth: '100%' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            your CO<sub>2</sub> for this activity is: 
          </Typography>
          <Typography variant="h5" component="div">
            {Math.round(fetchedData.co2e)} kg
          </Typography>
        </CardContent>    
      </Card>
      </Box>)
      : ''}
    </Box>
  );
}
