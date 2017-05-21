import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../style/leaderboard.css';

class Leaderboard extends Component {
    renderRows() {
        return this.props.teamLeaderboard.map( (team) => {
            console.log(team);
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
                            <th>Name</th>
                            <th># of wins</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.renderRows()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        teamLeaderboard: state.teamLeaderboard
    }
}

export default connect(mapStateToProps)(Leaderboard);