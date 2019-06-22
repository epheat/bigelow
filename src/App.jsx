import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

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

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About} />
                    <Route path="/events" component={Events} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;