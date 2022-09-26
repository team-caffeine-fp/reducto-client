
import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './login.css'
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill} from 'react-icons/ri'
import InputAdornment from '@mui/material/InputAdornment';
import { lightBlue } from '@mui/material/colors';

const login=()=>{

    const paperStyle={padding :20, height:'50vh',width:'25vw', margin:"10% 10% 20% 60%", borderRadius:"10px", opacity: 0.8}
    const avatarStyle={backgroundColor:'blue'}
    const btnstyle={margin:'8px 0'}
    const textfieldStyle = {margin: '1rem 0', backgroundColor: '#e1f5fe'}

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' variant="outlined" fullWidth required style={textfieldStyle} InputProps={{
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
                <Typography > Do you have an account ?
                     <Link href="/register" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default login