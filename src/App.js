import './App.css';
import React, { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import Login from './Login';
import { auth } from './firebase';
import Widgets from './Widgets';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
     if (userAuth) {
      // User is logged in
        dispatch(
          login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoUrl,
        })
      );
    } else {
        // User is logged out
        dispatch(logout());
      }
    });
  }, []);


  return (
    <div className="app">
      {/* Header */}
      <Header />

      {!user ? (
        <Login />
      ) : (
        // App Body
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
          {/* Other content */}
        </div>
      )}
    </div>
  );
}


export default App;
