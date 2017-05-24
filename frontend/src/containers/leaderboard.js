import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPlayerLeaderboard, getTeamLeaderboard } from '../actions/getLeaderboards';

import '../../style/leaderboard.css';

class Leaderboard extends Component {
    componentDidMount(){
        this.props.getPlayerLeaderboard();
        this.props.getTeamLeaderboard();
    }

    renderTable(leaderboard, column_titles) {
        return (
            <table>
                <thead>
                <tr>
                    {this.renderColumnHeadings(column_titles)}
                </tr>
                </thead>
                <tbody>
                    {this.renderRows(leaderboard)}
                </tbody>
            </table>
        )
    }

    renderColumnHeadings(column_titles) {
        return column_titles.map((title) => {
            return (
                <th key={title}> {title} </th>
            );
        })
    }

    renderRows(leaderboard_data) {
        return leaderboard_data.map( (team) => {
            return (
                <tr key={team.name}>
                    <td>{team.name}</td>
                    <td>{team.wins}</td>
                    <td><button>+</button></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="leaderboard">
                <div className="team-leaderboard">
                    {this.renderTable(this.props.teamLeaderboard, ['Team', 'Wins', ''])}
                </div>
                <div className="player-leaderboard">
                    {this.renderTable(this.props.playerLeaderboard, ['Player', 'Wins', ''])}
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

export default connect(mapStateToProps, {getPlayerLeaderboard, getTeamLeaderboard})(Leaderboard);