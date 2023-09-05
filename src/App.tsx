import { useState } from 'react'
import './App.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyA7uvtCPrfR_1rpEUqAPjKdfKCfZuFoblA",
  authDomain: "chat-5afbf.firebaseapp.com",
  projectId: "chat-5afbf",
  storageBucket: "chat-5afbf.appspot.com",
  messagingSenderId: "62634673045",
  appId: "1:62634673045:web:fea6656d123d3fd1d7ac9c",
  measurementId: "G-XJH5168Q6G"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  

  return (
    <>
          
    </>
  )
}

export default App
