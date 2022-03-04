import { makeStyles } from '@material-ui/core'
import React from 'react'
import img from '../img/Moe.jpg';
import VerifiedIcon from '@mui/icons-material/Verified';
import StoreIcon from '@mui/icons-material/Store';



const Profile = () => {

  const tab = '\u00A0';

  const classes = useStyles()
  return (
    <div className={classes.root}> 
    <div className={classes.container}> 
    <div className={classes.imgContainer}>
      <img src={img} alt='Moe' className={classes.img} />
    </div>
    <div className={classes.info}>
      <div className={classes.name}>Moe Szyslak{tab}<span className={classes.age}>40{tab}</span><VerifiedIcon className={classes.verified} /></div>
      <div className={classes.job}>
        <div>
          <StoreIcon />
        </div>{tab}
        Taberna de Moe
      </div>
      <hr />
      <div className={classes.interestsContainer}> 
      <div className={classes.title}>Intereses</div>
        <div className={classes.interests}>
        <div>Beber</div>
        <div>Viajar</div>
        </div>
      </div>
    </div>
    </div>
    </div>
    
  )
}

const useStyles = makeStyles((theme) => ({
  root:{
       background: "#F7D946",
       height: "85vh",
       display: "flex",
       justifyContent: "center",
       alignItems: "center"
   },
   container:{
     height: "500px",
     width: "380px",
     backgroundColor: "white",
     borderRadius: "10px"
   },
   img:{
     width: "100%",
     objectFit: "cover",
     height: "250px",
     borderRadius: "10px"
   },
   name: {
     display: "flex",
     alignItems: "center",
     fontWeight: "bold",
     fontSize: "1.5rem",
     margin: theme.spacing(2)
   },
   age: {
      fontWeight: "300"
   },
   job: {
     display: "flex",
     margin: theme.spacing(2)
   },
   title: {
      fontSize: "1.6rem"
   },
   interests: {
     display: "flex",
     color: "gray",
     fontSize: "1.1rem",
     "& div": {
       padding: "5px",
       border: "1px solid gray",
       margin: "5px",
       borderRadius: "30px"
     }
   },
   verified: {
     color: "#1976D2"
   }
 }))

export default Profile
