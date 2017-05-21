import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../style/leaderboard.css';

class Leaderboard extends Component {
    renderRows(board) {
        return this.props[board].map( (team) => {
            return (
                <tr key={team.name}>
                    <td>{team.name}</td>
                    <td>{team.wins}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="leaderboard">
                <div className="team-leaderboard">
                    <table>
                        <thead>
                            <tr>
                                <th>Team</th>
                                <th>Wins</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.renderRows('teamLeaderboard')}
                        </tbody>
                    </table>
                </div>
                <div className="player-leaderboard">
                    <table>
                        <thead>
                        <tr>
                            <th>Player</th>
                            <th>Wins</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.renderRows('playerLeaderboard')}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        teamLeaderboard: state.teamLeaderboard,
        playerLeaderboard: state.playerLeaderboard
    }
}

export default connect(mapStateToProps)(Leaderboard);