import React from 'react';
import PokerGame from '../components/PokerGame';

const games = require('../data/PokerGames.json');

function PokerResults(props) {

    return (
        <div className='bigelow-poker page-content'>
            <h3 className='title'>Poker Results</h3>
            {
                games.map(function(game, index) {
                    return (
                        <PokerGame key={index} game={game} />
                    );
                })
            }
        </div>
    );
}

export default PokerResults;