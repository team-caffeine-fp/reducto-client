import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill} from 'react-icons/ri'
import InputAdornment from '@mui/material/InputAdornment';
import { lightBlue } from '@mui/material/colors';




const register=()=>{

    const paperStyle={padding :20, height:'60vh',width:'25vw', margin:"10% 10% 20% 60%", borderRadius:"10px", opacity: 0.8}
    const avatarStyle={backgroundColor:'blue'}
    const btnstyle={margin:'8px 0'}
    const textfieldStyle = {margin: '0.5rem 0', backgroundColor: '#e1f5fe'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}></Avatar>
                    <h2>Register</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' variant="outlined" fullWidth required style={textfieldStyle} InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FaUser />
            </InputAdornment>
          ),
        }}/>
                <TextField label='Email' placeholder='Enter email' variant="outlined" fullWidth required style={textfieldStyle} InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MdEmail />
            </InputAdornment>
          ),
        }}/>
                <TextField label='Password' placeholder='Enter password' type='password' variant="outlined" fullWidth required style={textfieldStyle} InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <RiLockPasswordFill />
            </InputAdornment>
          ),
        }}/>
                <TextField label='Confirm Password' placeholder='Confirm password' type='password' variant="outlined" fullWidth required style={textfieldStyle} InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <RiLockPasswordFill />
            </InputAdornment>
          ),
        }}/>
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
                <Typography > Do you have an account ?
                     <Link href="/login" >
                        Sign In 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default register