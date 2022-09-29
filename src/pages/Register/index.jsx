import React, { useState } from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill} from 'react-icons/ri'
import InputAdornment from '@mui/material/InputAdornment';
import { lightBlue } from '@mui/material/colors';
import { useData } from '../../context';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/reducto.png'

const register=()=>{

  const paperStyle={padding :30, height: 'auto', width: "26rem", margin:"auto", marginBottom: "2%", borderRadius:"10px", opacity: 0.7}
  const avatarStyle={backgroundColor:'blue', marginTop: '5%'}
  const btnstyle={margin:'8px 0'}
  const textfieldStyle = {margin: '1rem 0', backgroundColor: '#e1f5fe'}

    const [username, setUsername ] = useState("")
    const [businessname, setBusinessname ] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const {register} = useData()

    function handleSubmit(e) {
      e.preventDefault()
      register(username, businessname, email, password)
      setUsername('')
      setBusinessname('')
      setEmail('')
      setPassword('')
    }

    return(
      <div className='viewcont paper'>
        <img src={logo}></img>
        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ flexWrap: 'wrap-reverse', marginBottom: '3%'}}>
          <Grid item xs={10} md={6}>
          <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}></Avatar>
                    <h2>Register</h2>
                </Grid>
                <form onSubmit={handleSubmit}>
                  <TextField label='Username' placeholder='Enter username' variant="outlined" fullWidth required style={textfieldStyle} InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaUser />
              </InputAdornment>
            ),
          }} value={username} onChange={(e) => setUsername(e.target.value)}/>
                  <TextField label='businessname' placeholder='Enter business name' variant="outlined" fullWidth required style={textfieldStyle} InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaUser />
              </InputAdornment>
            ),
          }} value={businessname} onChange={(e) => setBusinessname(e.target.value)}/>
                  <TextField label='Email' placeholder='Enter email' variant="outlined" fullWidth required style={textfieldStyle} InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MdEmail />
              </InputAdornment>
            ),
          }} value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <TextField label='Password' placeholder='Enter password' type='password' variant="outlined" fullWidth required style={textfieldStyle} InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RiLockPasswordFill />
              </InputAdornment>
            ),
          }} value={password} onChange={(e) => setPassword(e.target.value)}/>
                  <TextField label='Confirm Password' placeholder='Confirm password' type='password' variant="outlined" fullWidth required style={textfieldStyle} InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RiLockPasswordFill />
              </InputAdornment>
            ),
          }} value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)}/>
                  <FormControlLabel
                      control={
                      <Checkbox
                          name="checkedB"
                          color="primary"
                      />
                      }
                      label="Remember me"
                  />
                  <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Create an account</Button>
                </form>
                <Typography > Do you have an account ?
                     <NavLink to="/login" >
                        Sign In 
                </NavLink>
                </Typography>
            </Paper>
            </Grid>  
        </Grid>
      </div>
    )
}

export default register
