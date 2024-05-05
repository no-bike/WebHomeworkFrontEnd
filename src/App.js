
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Routemain from './Router/Routemain';

function App() {
  return (
    <RouterProvider router={Routemain}/>
  );
}

export default App;
