import { makeStyles } from '@material-ui/core';


const UserLike = ({ peopleLeft, peopleRight }) => {


  const classes = useStyles();
  return (
    <div className={classes.root}>
      {peopleRight.length !== 0 ? (<div>
        <div className={classes.title}>Usuarios a los que diste me gusta</div>
        <div className={classes.container}>
      {
        peopleRight.map(right => (
          <div key={right.name} className={classes.character}>
            <span className={classes.name}>
            {right.name}
            </span>

            <span>
              <img src={right.url} alt={right.name} className={classes.img} />
            </span>
            
          </div>
        ))
        
      }
      </div>
      </div>) : ('')}
      {peopleLeft.length !== 0 ? (<div>
        <div className={classes.title}>Usuarios que rechazaste</div>
      <div className={classes.container}>
      {
        peopleLeft.map(left => (
          <div key={left.name} className={classes.character}>
            <span className={classes.name}>
            {left.name}
            </span>

            <span>
              <img src={left.url} alt={left.name} className={classes.img} />
            </span>
            
          </div>
          
        ))
      }
      </div>
      </div>) : ('')}

    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root:{
       background: "#F7D946",
   },
   container: {
      display: "flex",
      flexWrap: "wrap",
      [theme.breakpoints.down("sm")] : {
        display: "grid",
        gridTemplateColumns: "auto auto auto"
      },
   },
   title: {
      background: 'linear-gradient(45deg, #f05c31 30%, #FF8E53 90%)',
      fontSize: "1.3rem",
      fontWeight: "700",
      border: "none",
      borderRadius: "3px",
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: '#dfdfdf',
      padding: '12px',
    },

   img: {
     height: "150px",
     width: "150px",
     [theme.breakpoints.down("sm")] : {
      width: "100px",
      height: "100px"
    },
     objectFit: "cover",
     borderRadius: "15px"
   },
   name: {
      fontSize: "1.5rem",
      marginBottom: "8px"
   },
   character: {
     display: "flex",
     flexDirection: "column",
     margin: "25px",
     backgroundColor: "#D2B27F",
     padding: "20px",
     [theme.breakpoints.down("sm")] : {
      padding: "6px",
      margin: "8px"
    },
     borderRadius: "10px"
   }
 }))
 
 export default UserLike