import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@material-ui/core/IconButton';
import TinderCards from './TinderCards';


const SwipeButtons = ({ swipe, goBack}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton className={classes.replayButton} onClick={() => goBack()}>
          <ReplayIcon fontSize='large'  />
      </IconButton>

      <IconButton className={classes.closeButton} onClick={() => swipe('left')}>
          <CloseIcon fontSize='large' />
      </IconButton>

      <IconButton className={classes.starButton} >
          <StarIcon fontSize='large' />
      </IconButton>

      <IconButton className={classes.favoriteButton} onClick={() => swipe('right')}>
          <FavoriteIcon fontSize='large'  />
      </IconButton>

      <IconButton className={classes.flashOnButton}>
          <FlashOnIcon fontSize='large' />
      </IconButton>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "305px",
  },
  replayButton: {
    padding: "22px !important",
    
    color: "orange !important",
    width: "25px",
    height: "25px",
  },
  closeButton: {
    padding: "22px !important",
    
    color: "rgba(214, 76, 57) !important",
    width: "25px",
    height: "25px",
  },
  starButton: {
    padding: "22px !important",
    
    color: "rgba(64, 168, 233) !important",
    width: "25px",
    height: "25px",
  },
  favoriteButton: {
    padding: "22px !important",
    
    color: "rgba(82, 165, 82) !important",
    width: "25px",
    height: "25px",
  },
  flashOnButton: {
    padding: "22px !important",
    
    color: "purple !important",
    width: "25px",
    height: "25px",
  }
}))

export default SwipeButtons