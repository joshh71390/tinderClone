import React, { useState, useMemo, useRef, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import { IconButton, makeStyles } from '@material-ui/core';
import SwipeButtons from './SwipeButtons';
import database from '../Firebase';
import UserLike from './UserLike';
import VerifiedIcon from '@mui/icons-material/Verified';


function TinderCards () {
  
  const classes = useStyles();
  const [people, setPeople] = useState([])
  const [currentIndex, setCurrentIndex] = useState()
  const[direction, setLastDirection] = useState()
  console.log(currentIndex)
  const [peopleLeft, setPeopleLeft] = useState([])
  const [peopleRight, setPeopleRight] = useState([])
  const tab = '\u00A0';




  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(people.length)
        .fill(0)
        .map((i) => React.createRef()),
    [people]
  )

  


  useEffect(() => {
    const unsubscribe = database.collection('people').onSnapshot(snapshot =>{
      const p = snapshot.docs.map(doc => doc.data())
        setPeople(p)
        setCurrentIndex(p.length -1)
    });
    return () => {
        unsubscribe();
    }

}, []) 

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)

    currentIndexRef.current = val
    
  }

  const canGoBack = currentIndex < people.length - 1


  const swiped = (direction, name, index, url) => {
    setLastDirection(direction)
    if(direction === "left"){
      setPeopleLeft((left) => [
        ...left,
        {
        name,
        url
      }])
    } else {
      setPeopleRight((right) => [
        ...right,
        {
        name,
        url
      }])
    }
    
    updateCurrentIndex(index - 1)
  }




  const outOfFrame = (name, idx) => {

    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()

  }

  

  const swipe = async (dir) => {


      if(currentIndex < people.length) {
        console.log(childRefs[currentIndex])
        await childRefs[currentIndex].current.swipe(dir)
        console.log('entro al if')
      }

      

  }


  

 
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }
  
console.log(currentIndex)

  return (
    <div className={classes.root}>
      {currentIndex !== -1 ? (<div className={classes.container}>
        {people.map((character, index) => (
          <div className={classes.swipe}
               key={character.url}
          >
          <TinderCard
            ref={childRefs[index]}
            onSwipe={(dir) => swiped(dir, character.name, index, character.url)}
            onCardLeftScreen={() => outOfFrame(character.name, index)}
            preventSwipe={['up','down']}
          >
            
            <div
              style={{ backgroundImage: 'url(' + character.url + ')' }}
              className={classes.cards}
            >
              <div className={classes.nameContainer}>
                           <h2 className={classes.name}>{character.name}{tab}
                           <span className={classes.age}>{character.age}</span>
                           </h2>
                               <IconButton className={classes.verified}>
                                   <VerifiedIcon color="primary"/>
                               </IconButton>
                            </div>
                            
            </div>
            
          </TinderCard>
         
          </div>
        ))}
        <div className={classes.buttons}>
                      <SwipeButtons 
                            swipe={swipe} 
                            goBack={goBack}/>
                  </div>
              </div>) : (<UserLike peopleLeft={peopleLeft} peopleRight={peopleRight}  />)}
                  
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
 root:{
  background: "#F7D946",
  height: "90vh",
      
  },
  container: {
    display: "flex",
    justifyContent: "center",
    
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "center"
  },
  cards: {
      width: "350px",
      maxWidth: "85vw",
      height: "430px",
      borderRadius: "20px",
      backgroundSize: "cover",
      backgroundPosition: "center",
      boxShadow: "0 10px 10px 0 rgba(0, 0, 0, 0.15)",
      marginTop: "100px"
  },
  nameContainer: {
      display: "flex",
      position: "absolute",
      bottom: "20px",
      color: "white",
      paddingLeft: "10px"
  },
  name: {
      fontWeight: "500",
  },
  swipe: {
      position: "absolute"
  },

  buttons: {
    background: "#e3e3e387",
    padding: "15px",
    margin: "15px",
    borderRadius: "6px",
    display: "inline-block",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px"
  
  },
}))

export default TinderCards