import './App.css';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Header from './components/Header';
import SingleChat from './components/SingleChat';
import ChatList from './components/ChatList';
import TinderCards from './components/TinderCards';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/counter/userSlice';
import { auth } from './Firebase';
import Login from './components/Login';
import Profile from './components/Profile';


function App() {
  const dispatch = useDispatch();

  useEffect(() => { 
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
          dispatch(login({
              uid: userAuth.uid,
              email: userAuth.email,
          })) 
          } else {
            dispatch(logout)
      }

    })
    
    return unsubscribe;
}, [dispatch])

  return (
    <div className="App">
        <Router>
            <Routes>
                
                <Route path="/chat/:persona" element={
                  <>
                    <Header backbutton="/chats"/>
                    <SingleChat />
                  </>
                } />
                <Route path="/chats" element={
                    <>
                      <Header backButton="/cards" />
                      <ChatList />
                    </>
                } />
                <Route path="/profile" element={
                  <>
                    <Header backButton="/cards" />
                    <Profile />
                  </>
                } />
                <Route path="/cards" element={
                    <>
                      <Header />
                      <TinderCards />
                    </>
                } />

              <Route path='/' element={<Login />}></Route>
              </Routes>
        </Router>
        </div>
        )
}

export default App;
