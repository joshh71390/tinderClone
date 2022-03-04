import { IconButton, InputAdornment, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Logo from '../img/tinder-logo.png';


const SignUp = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const signIn = (e) => {
      e.preventDefault();
      auth.signInWithEmailAndPassword(email, password)
      .then(authUser => navigate('/cards'))
      .catch(err => alert(err.message))
  }

  const register = (e) => {
      e.preventDefault();
      auth.createUserWithEmailAndPassword(email, password)
      .then(authUser => navigate('/cards'))
      .catch(err => alert(err.message))
  }

  const inputStyle = {
      width: "300px",
  }



  return (
    <div className={classes.root}>
        <div>
            <img src={Logo} 
                 alt='Logo'
                 className={classes.logo}
            />
        </div>
      <div className={classes.container}>
        <h1>INGRESAR</h1>
        <form className={classes.form}>
            <div className={classes.email}>
              <IconButton>
                <EmailIcon className={classes.icon} />
              </IconButton>
                <TextField 
                    placeholder='Email'
                    value={email}
                    type='email'
                    onChange={e => setEmail(e.target.value)}
                    style = {inputStyle}
                />
            </div>
            <div className={classes.password}>
              <IconButton>
                <VisibilityIcon className={classes.icon} />
              </IconButton>
                <TextField 
                    placeholder='Password'
                    value={password}
                    type='password'
                    onChange={e => setPassword(e.target.value)}
                    style = {inputStyle}
                />
            </div>
              <div>
                <button onClick={signIn}
                    className={classes.button}
                    >Iniciar sesión
                </button>
                    <h3 className={classes.signupLink}>
                        NUEVO AQUÍ? {""}
                        <span 
                            onClick={register}
                        >       
                            REGÍSTEATE AHORA.{""}
                        </span>
                    </h3>
           </div>
      </form>
    </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root:{
        display: "grid",
        gridTemplateColumns: "50% 50%",
        backgroundColor: "#f7d946",
        height: "100vh",
        alignItems: "center",
        [theme.breakpoints.down("sm")] : {
            gridTemplateRows: "40% 60%",
            gridTemplateColumns: "none",
            alignItems: "center",
            justifyItems: "center"
          }, 
    },
    logo: {
        height: "200px",
        [theme.breakpoints.down("sm")] : {
            height: "152px"
          },
    },
    container: {
        display: "grid",
        width: "400px",
        height: "500px",
        borderRadius: "5px",
        backgroundColor: "white",
        padding: "20px",
        [theme.breakpoints.down("sm")] : {
            width: "335px",
            height: "430px"
          }, 
    },
    email: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #CECECE",
        borderRadius: "3px"
    },
    password: {
        display: "flex ",
        alignItems: "center",
        justifyContent: "center",
        margin: "25px 0",
        border: "1px solid #CECECE",
        borderRadius: "3px"
    },
    signupLink: {
        color: "#C0C0C0",
        fontSize: "1rem",
        "& span" : {
            cursor: "pointer",
            textDecoration: "underline"
        },
        "& span:hover": {
            color: "black"
        } 
    },
    button:{
        backgroundColor: "#E93032",
        color: "white",
        border: "none",
        outline: "none",
        width: "100%",
        padding: "12px 0",
        borderRadius: "25px",
        fontWeight: "bold",
        cursor: "pointer",
        fontSize: "1.2rem"
    },
    icon: {
        color: "#E93032"
    }
}))

export default SignUp
