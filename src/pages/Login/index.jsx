import React, { useState } from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './login.css'
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill} from 'react-icons/ri'
import InputAdornment from '@mui/material/InputAdornment';
import { lightBlue } from '@mui/material/colors';
import { useData } from '../../context';

const login=()=>{

    const paperStyle={padding :30, height: '30rem', width: "26rem", margin:"auto", marginBottom: "2%", borderRadius:"10px", opacity: 0.7}
    const avatarStyle={backgroundColor:'blue', marginTop: '5%'}
    const btnstyle={margin:'8px 0'}
    const textfieldStyle = {margin: '1rem 0', backgroundColor: '#e1f5fe'}

    const [username, setUsername ] = useState("")
    const [password, setPassword] = useState("")
    const {login} = useData()

    function handleSubmit(e) {
      e.preventDefault()
      login(username, password)
      setUsername('')
      setPassword('')
    }

    return(
      <>
        <img src='.\assets\images\reducto.png'></img>
        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ flexWrap: 'wrap-reverse', marginBottom: '3%'}}>
          <Grid item xs={10} md={6}>
            <Paper elevation={10} style={paperStyle}>
                <div className='paper'>
                  <h2>Measure your company's carbon footprint</h2>
                  <div>
                      <p>An increasing number of organizations are looking at ways to reduce their greenhouse gas emissions as both customers and employees demand a more sustainable way of doing business.</p><p> You can calculate your carbon footprint by logging in into your account and see ways of preserving our environment and slowing down climate change.</p>
                  </div>
                </div>
              </Paper>
            </Grid>
          <Grid item xs={10} md={6}>
          <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}></Avatar>
                    <h2 className='paper'>Sign In</h2>
                </Grid>
                <form onSubmit={handleSubmit}>
                  <TextField label='Username' placeholder='Enter username' variant="outlined" fullWidth required style={textfieldStyle} InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MdEmail />
              </InputAdornment>
            ),
          }} value={username} onChange={(e) => setUsername(e.target.value)}/>
                  <TextField label='Password' placeholder='Enter password' type='password' variant="outlined" fullWidth required style={textfieldStyle} InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RiLockPasswordFill />
              </InputAdornment>
            ),
          }} value={password} onChange={(e) => setPassword(e.target.value)}/>
                  <FormControlLabel
                      control={
                      <Checkbox
                          name="checkedB"
                          color="primary"
                      />
                      }
                      label="Remember me"
                  />
                  <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                </form>
                <Typography > Do you have an account ?
                     <Link href="/register" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
            </Grid>  
        </Grid>
      </>
      
    )
}

export default login
