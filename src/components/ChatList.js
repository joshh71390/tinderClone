import { makeStyles } from '@material-ui/core';
import React from 'react'
import ChatPreview from './ChatPreview';

const ChatList = () => {
  const classes = useStyles();
  return (
    <div className="listadoChats">
            <ChatPreview 
                name="Lisa Simpson"
                message="Hola qué tal?"
                timeStamp="Hace 40seg"
                profileImg="https://lamenteesmaravillosa.com/wp-content/uploads/2018/05/lisa-simpson.png"
            />

            <ChatPreview
                name="Patty"
                message="Que te parece si tomamos algo Moe?"
                timeStamp="Hace 1h"
                profileImg="https://depor.com/resizer/UDhjmC4iqpBho1uVV3aYiYGPQrk=/620x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/P6Z7UCJFIRF4NHCBGKXVMMP3IM.png"
            />

            <ChatPreview
                name="Marge Simpson"
                message="Homero se va a enojar"
                timeStamp="Hace 1 día"
                profileImg="https://pm1.narvii.com/6404/13112b191e61ea15a34b74c1b65931afcbc0789a_hq.jpg"
            />

            <ChatPreview
                name="Edna Krabappel"
                message="Hoy no puedo, tengo otra cita"
                timeStamp="Hace 1 semana"
                profileImg="https://e00-elmundo.uecdn.es/elmundo/imagenes/2013/10/26/television/1382824096_extras_ladillos_1_0.jpg"
            />



        </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#2FA7CC"
    }
  }))

export default ChatList