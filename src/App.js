import React, { useState } from "react";
import "./index.css"
import SignUp from "./Components/SignUp";
import {BrowserRouter , Route,  Routes, Navigate,} from "react-router-dom";
import ProfilePage from "./Components/ProfilePage";

const App=()=>{
    const [isloggedIn,setLoginStatus]=useState(false);
    return(
       <div className="App">
        
        <BrowserRouter>
      <Routes>
        <Route path="/login" element={isloggedIn?<Navigate to='/profile'/>:<SignUp setLoginStatus={setLoginStatus}/>}></Route>
        <Route path="/profile" element={isloggedIn?<ProfilePage/>:<Navigate to='/login'/>}></Route>
        <Route path="*" element={<Navigate to='/login'/>}></Route>

      </Routes>
    </BrowserRouter>
        
        
       </div>
    )
}

export default App;