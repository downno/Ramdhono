import React, { useState } from 'react'
import TextField from "@mui/material/TextField"
import { Avatar, Button, Container, Typography, Box } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock'
import Visibility from "@mui/icons-material/Visibility"
import { useNavigate } from 'react-router-dom'

const Login = () => {
const [isShowPassword, setIsShowPassword] = useState(false);

let navigate = useNavigate()
const handleSubmit = (event) => {
  event.preventDefault();
  console.log ("Hai, Selamat")

  const email ="dono@unsri.ac.id"
  const password ="dono"
  
  if (email ==="dono@unsri.ac.id" && password ==="dono"){
   return navigate("/topic")
  }
  else {
    return navigate("/NotFound")
  }
}

  return (

       
    <div>
        <Container maxWidth="xs" >
          <Box sx={{marginTop:8, display:"flex", alignItems:"center", flexDirection:"column"}}
          component="form" onSubmit={handleSubmit}>

          <Avatar sx={{bgcolor: "secondary.main"}}>
            <LockIcon/>
          </Avatar>

          <Typography component={"h1"} variant="h5">Sign In </Typography>

        <TextField id="email" label="Email Address" variant="outlined" 
        fullWidth
        required 
        margin="normal"
        autautoFocus
        name="email"
        type="text"
        />
        <div style={{display:"flex", width:"100%", position:"relative"}}>
        <TextField id="password" label="Password" variant="outlined" 
         fullWidth
        required 
        margin="normal"
        autautoFocus
        name="password"
        type={isShowPassword ? "text" : "password"}
        />
        <div style={{position:"absolute", right:15, top:33, cursor:"pointer"}}
        onClick={()=> setIsShowPassword(!isShowPassword)}
        >

          <Visibility fontSize="small"/>
        </div>
        </div>
       
                         
    <Button type="submit" variant="contained" fullWidth label="Sign In">Sign In</Button>
        </Box>
      </Container>

      </div>
  )
}

export default Login