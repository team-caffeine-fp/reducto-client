import React from 'react'
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material'

import data from './data'
import { Container, Form } from '../../common'
function index() {

  const [ category, setCategory ] = React.useState(data[0].category)
  const [ currentData, setCurrentData ] = React.useState(data[0])
  const handleOnChange = (e) => {
    setCategory(e.target.value)
  }
  React.useEffect(() => {
    const set = () => {
      setCurrentData(...data.filter(d => d.category == category))
    }
    set()

  }, [category])
  
  
  const styles = {
    box: {
      padding: '20px',
      borderRadius: '20px',
      width: '60%',
      margin: 'auto',
      backgroundColor: 'rgba(255,255,255,0.8)'
    }
  }

  return (
    <Box style={styles.box}>
      <FormControl fullWidth>
        <InputLabel id="data-category">Category</InputLabel>
        <Select
          labelId="data-category"
          id="demo-simple-select"
          label='data-category'
          onChange={handleOnChange}
          value={category}
        >
        {data.map((d, ind) => <MenuItem key={ind} value={d.category}>{d.category}</MenuItem>)}
        </Select>
        <Form data={currentData} category={category} />
      </FormControl>
    </Box>
  )
}

export default index