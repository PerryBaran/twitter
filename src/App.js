import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './componenets/routes/SignIn.js';
import Home from './componenets/routes/Home.js';
import Profile from './componenets/routes/Profile.js';
import './componenets/styles/style.css';


function App(props) {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/home" element={<Home />} />
                <Route path="/:id" element={<Profile />} />
            </Routes>
        </Router>
    );
}

export default App;