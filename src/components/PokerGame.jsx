import React from 'react';

import Baboosh from './Baboosh';
import Collapse from 'react-bootstrap/Collapse';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { MdExpandMore, MdChevronRight } from 'react-icons/md';

class PokerGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    getPlayerTableRow(player) {
        // If they break even, default to black
        let profitStyle = '';
        const profit = player.cashOut - player.buyIn;
        let profitText = '0';
        if (profit > 0) {
            profitStyle = 'profit-gain';
            profitText = profit;
        } else if (profit < 0) {
            profitStyle = 'profit-loss';
            profitText = '('.concat(Math.abs(profit)).concat(')');
        }

        return (
            <tr key={player.name}>
                <td>{player.name}</td>
                <td>{player.buyIn}</td>
                <td>{player.cashOut}</td>
                <td className={profitStyle}>{profitText}</td>
            </tr>
        )
    }

    render() {
        const game = this.props.game;
        const chevron = this.state.open ? MdExpandMore : MdChevronRight;
        return (
            <div>
                <Row className='poker-game-headline' onClick={()=>this.setState({open: !this.state.open})}>
                    <h3 className='col-auto poker-dropdown'>{React.createElement(chevron, null, null)}</h3>
                    <h5 className='col-auto'>{game.date}: {game.players[0].name} def. {game.players.length-1} other players</h5>
                </Row>
                <Collapse in={this.state.open}>
                    <div>   {/* This div allows smooth dropdown animation */}
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th><Baboosh/>uy In</th>
                                    <th>Cash Out</th>
                                    <th>Profit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    game.players.map(function(player) {
                                        return this.getPlayerTableRow(player)
                                    }, this)
                                }
                            </tbody>
                        </Table>
                    </div>
                </Collapse>
                <hr />
            </div>
        );
    }
}

export default PokerGame;
