import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './componenets/routes/SignIn';
import Home from './componenets/routes/Home';
import Profile from './componenets/routes/Profile';


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