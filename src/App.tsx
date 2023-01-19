import React from 'react';
import './components/generate.css';
import Genepaswrd from './components/genepasswrd';
import Navbar from './components/nav';
import Load from './components/load';
import { useState,useEffect } from 'react';

function App() {
  const[loa,setLoa]=useState<boolean>(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoa(false)
    },6000)
      },[])
  return (
    <div className='App'>
     {loa==true? <Load/>
     :
     <div>
      <Navbar/>
     <Genepaswrd/>
     </div>
}</div>
  );
}

export default App;
