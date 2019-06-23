import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import PokerResults from './pages/PokerResults';

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
                    <Route path="/poker" component={PokerResults}/>
                </Switch>
            </div>
        </Router>
    );
};

export default App;