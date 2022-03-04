import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react'
import SignUp from './SignUp';


const Login = () => {
  const classes = useStyles();
  const [signIn, setSignIn] = useState(false);


  return (
    <div className={classes.root}>
            {
                 !signIn && (<SignUp />) 
            }
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root:{
    }
}))

export default Login
