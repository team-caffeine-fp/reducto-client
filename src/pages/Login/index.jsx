
import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './login.css'

const login=()=>{

    const paperStyle={padding :20, height:'50vh',width:'25vw', margin:"7rem auto", borderRadius:"10px", opacity: 0.8}
    const avatarStyle={backgroundColor:'blue'}
    const btnstyle={margin:'8px 0'}
    const textfieldStyle = {margin: '1rem 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Email' placeholder='Enter email' variant="outlined" fullWidth required style={textfieldStyle}/>
                <TextField label='Password' placeholder='Enter password' type='password' variant="outlined" fullWidth required style={textfieldStyle}/>
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