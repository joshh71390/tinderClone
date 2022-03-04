import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react'
import { Avatar } from '@material-ui/core';

const SingleChat = () => {

  const send = (e) => {
    e.preventDefault()
    setMessage([
      ...message,
      {message:input}
    ]);
    setInput('')
  }

  const classes = useStyles();
  const[input, setInput] = useState('')
  const[message, setMessage] = useState([
    {
      name: 'Maria',
      img: '...',
      message: 'Holaa'
    },
    {
      name: "María",
      img: "...",
      message: "Estás ahí????? RESPONDEEEEEEEE" 
  },
  {
      message: 'holaaa perdon perdon ya estoyyy'
  }
  ]);

  return (
    <div className={classes.root}>
      <p className={classes.timeStamp}>CONSEGUISTE UN MATCH EL 25/2/22</p>
        {
          message.map(message => 
            message.name ? (
              <div key={message.url}
                   className={classes.name}
              >
                   
                  <Avatar
                        src={message.img}
                        alt={message.name}
                  >
                  </Avatar>
                  <p className={classes.message}>{message.message}</p>
              </div>
            ) : (
              <div 
              key={message.name}
                className={classes.messageContainer}
              >
                      <p className={classes.ownMessage}>{message.message}</p>
              </div>
            )
        )}

              <form className={classes.form}>
                    <input className={classes.input} value={input} onChange={ e => setInput(e.target.value)} placeholder="Escribe un mensaje..."/>
                    <button onClick={send} type="submit" className={classes.button}>Enviar</button>
              </form>

    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
    },
    messageContainer: {
      display: "flex",
      alignItems: "center",
    },
    message: {
      marginLeft: "10px",
      backgroundColor: "lightgrey",
      padding: "15px",
      borderRadius: "20px"
    },
    timeStamp: {
      textAlign: "center",
      padding: "20px",
      color: "grey"
    },
    ownMessage: {
      backgroundColor: "skyblue",
      marginLeft: "auto",
      padding: "15px",
      borderRadius: "20px",
      color: "white"
    },
    form: {
      display: "flex",
      padding: "5px",
      position: "fixed",
      bottom: "0",
      width: "100%",
      borderTop: "1px solid lightgray",
      backgroundColor: "white"
    },
    input: {
      padding: "10px",
      flex: "1",
      border: "none",
      outline: "none"
    },
    button: {
      border: "none",
      backgroundColor: "#fff",
      marginRight: "20px",
      color: "#fe3d71",
      fontWeight: "bold"
    },
    name: {
      display: "flex",
      alignItems: "center"
    }
  }))

export default SingleChat