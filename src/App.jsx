import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';

import './scss/bigelow.scss';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />

                <hr />

                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/events" component={Events} />
            </div>
        </Router>
    );
};

export default App;