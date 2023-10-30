

// function App() {
//   return (
//     <h1 className="text-3xl font-bold underline bg-slate-500">
//     Hello world!
//   </h1>
//   );
// }

// export default App;

import React from 'react'
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Home from './login/Home';
import BizCard from './components/BizCard'

 
function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        {/* <Route path="/home" element={<Home/>}></Route> */}
        <Route path="/home" element={<BizCard/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;


