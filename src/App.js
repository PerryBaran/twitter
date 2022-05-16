import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './componenets/routes/SignIn.js';
import Home from './componenets/routes/Home.js';
import Profile from './componenets/routes/Profile.js';
import './componenets/styles/style.css';
import Navbar from './componenets/Navbar.js';


function App(props) {
    return (
        <div className='table'>
            <Router>
                <div className='nav'>
                    <Navbar /> 
                </div>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/:id" element={<Profile />} />
                </Routes>
            </Router>
        </div>
    );
                
        
}

export default App;