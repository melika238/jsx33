import React from 'react';
import './App.css';
import imageInSrc from "./imageInSrc.jpg";

function App() {
  return (
    <>
    <div style={{border:'solid' ,'1px': 'black',maxWidth:'100vw'}}>  

    <h1 className="titleRed">Your name here</h1>
    <br>
       <img src={imageInSrc}/>
       </br>
    </div>
    <img src="/imageInPublic.jpg" />   
    <video width="320" height="240" controls>  
    <source src="myVideo.mp4" type="video/mp4"/>    
    </video>
    </>
  )
   
}

export default App;
