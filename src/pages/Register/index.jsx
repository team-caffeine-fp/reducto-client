import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { FaUser } from 'react-icons/fa';



const register=()=>{

    const paperStyle={padding :20, height:'60vh',width:'25vw', margin:"5rem auto", borderRadius:"10px", opacity: 0.8}
    const avatarStyle={backgroundColor:'blue'}
    const btnstyle={margin:'8px 0'}
    const textfieldStyle = {margin: '0.5rem 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Email' placeholder=' Enter email' variant="outlined" fullWidth required style={textfieldStyle}/>
                <TextField label='Email' placeholder='Enter email' variant="outlined" fullWidth required style={textfieldStyle}/>
                <TextField label='Password' placeholder='Enter password' type='password' variant="outlined" fullWidth required style={textfieldStyle}/>
                <TextField label='Confirm Password' placeholder='Confirm password' type='password' variant="outlined" fullWidth required style={textfieldStyle}/>
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