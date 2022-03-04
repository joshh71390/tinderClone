import React from 'react'
import { makeStyles } from '@material-ui/core';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../img/logo.png';
import LoginIcon from '@mui/icons-material/Login';
import { auth } from '../Firebase';

const Header = ({ backButton }) => {
  const classes = useStyles();
  const navigate = useNavigate()

  const signOut = () => {
    auth.signOut();
    navigate("/")
}


  return (
    <div className={classes.root}>
        {backButton ? (
            <IconButton onClick={() =>  navigate(backButton)}>
                <ArrowBackIosIcon fontSize='large' className={classes.icon}/>
            </IconButton>
        ) : (
            <Link to="/profile">
                <IconButton>
                    <PersonIcon fontSize='large' 
                                className={classes.icon}
                    />
                </IconButton>
            </Link>    
        )}
        <Link to="/cards" >
            <img src={Logo}
                 alt='logo'
                 className={classes.logo}
            />
        </Link>

       <div className={classes.container}> 
        <div className={classes.signOut}>
                <IconButton onClick={signOut}>
                    <LoginIcon />
                </IconButton>
            </div>

        <Link to="/chats">
            <IconButton>
                <ForumIcon fontSize='large'
                           className={classes.icon}
                />
            </IconButton>
        </Link>
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#6BADDD"
    },
    logo: {
        height: "40px",
        objectFit: "contain"
    },
    icon: {
        padding: "20px"
    },
    signUp: {
        display: "flex",
        alignItems: "center"
    },
    container:{
        display: "flex",
        alignItems: "center"
    }
  }))


export default Header