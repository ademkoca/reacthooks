import React from 'react';
import './App.css';
import { useState } from "react";
import Nav from './components/Nav';
import Home from './components/Home';

function App() {

  const [authenticated, setAuthenticated] = useState(true);
  const username = "Adem Koca";
  return (
    <>
      <Nav username={authenticated ? "Hello, " + username : "Hello, stranger"} />
      <Home username={username} />
    </>



  )


}

export default App;
