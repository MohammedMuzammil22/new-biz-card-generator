import React from 'react'
import Login from "./react_components/login/Login";
// import Login from "./react components/login/Login";
import Signup from "./react_components/login/Signup";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BizCard from './react_components/BizCard'
import Dummy from './react_components/Dummy'
import BackupBizCard from './react_components/BackupBizCard'
import './globals.css'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route> 
          <Route path="/signup" element={<Signup/>}></Route>
          {/* <Route path="/home" element={<Home/>}></Route> */}
          <Route path="/home" element={<BizCard/>}></Route>
          <Route path="/dummy" element={<Dummy/>}></Route>
          <Route path="/backup" element={<BackupBizCard/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
 