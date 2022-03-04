import { makeStyles } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';

const ChatPreview = ({ name, message, timeStamp, profileImg}) => {
  const classes = useStyles();
  return (
    <Link className={classes.root} to={`/chat/${name}`}>
        <div className={classes.chatPreview}>
            <Avatar className={classes.img} src={profileImg} alt={name}/>
            <div className={classes.detailss}>
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
            <p className={classes.timeStamp}>{timeStamp}</p>
        </div>
    </Link>
  )
}

const useStyles = makeStyles((theme) => ({
    chatPreview: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px",
      height: "70px",
      borderBottom: "1px solid #fafafa",
    },
    detailss: {
      flex: "1",
      textAlign: "initial",
      textDecoration: "none",
      "& p": {
        color: "gray",
        textDecoration: "none",
        margin: "0"
      },
      "& h2": {
        color: "black",
        margin: "0"
      },
    },
    img: {
      marginRight: "20px",
    },
    timeStamp: {
      color: "lightgray",
      textDecoration: "none",
    },
    a: {
      textDecoration: "none",
      color: "inherit"
  },
  root: {
    textDecoration: "none"
  }
  }))

export default ChatPreview