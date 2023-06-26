import React from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Addnew from './components/Addnew';

function App() {
 
  return (
    <div className="App">
    {/* Header */}
    <Header/>

    {/* Body */}
    <Dashboard/>


    {/* <Addnew/> */}
    
      
    </div>
  );
}

export default App;
