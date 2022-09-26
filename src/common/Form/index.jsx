import * as React from 'react';
import { Box, Button, FormControl, FormHelperText, MenuItem, InputAdornment, InputLabel, OutlinedInput, Select } from '@mui/material'

export default function InputAdornments({data, category}) {
    let obj = {}
    for (let attr of data.fields) {
        if(attr.options.length > 0) {
            obj[attr.name] = attr.options[0]
        } else {
            obj[attr.name] = ''
        }
    }
  const jsfiyString = (str) => {
    return str.replace(' ', '_').toLowerCase()
  }
  const [values, setValues] = React.useState(obj)
  const handleChange = e => {
    const newInput = e.target.value;
    setValues({...values, [e.target.name]: newInput});
  }

  const handleSubmit = () => {
    const cat = jsfiyString(category)
    console.log(values, cat)
  }

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
    </Box>
  );
}
