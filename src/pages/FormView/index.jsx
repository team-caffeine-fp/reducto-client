import React from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

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
  
  return (
    <Container>
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
    </Container>
  )
}

export default index