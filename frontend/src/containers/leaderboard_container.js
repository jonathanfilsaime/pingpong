import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPlayerLeaderboard, getTeamLeaderboard } from '../actions/getLeaderboards';
import { addWin } from '../actions/addWin';

import Leaderboard from '../components/leaderboard';

import '../../style/leaderboard.css';

class LeaderboardContainer extends Component {
    componentDidMount(){
        this.props.getPlayerLeaderboard();
        this.props.getTeamLeaderboard();
    }

    render() {
        return (
            <div className="leaderboard">
                <div className="team-leaderboard">
                    <Leaderboard
                        columnHeadings={["Team", "Wins", ""]}
                        tableData={this.props.teamLeaderboard}
                    />
                </div>
                <div className="player-leaderboard">
                    <Leaderboard
                        columnHeadings={["Player", "Wins", ""]}
                        tableData={this.props.playerLeaderboard}
                    />
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

export default connect(mapStateToProps, {getPlayerLeaderboard, getTeamLeaderboard, addWin})(LeaderboardContainer);