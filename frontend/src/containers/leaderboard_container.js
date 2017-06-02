import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPlayerLeaderboard, getTeamLeaderboard, onSearchTextChange } from '../actions/getLeaderboards';
import { addPlayerWin, addTeamWin } from '../actions/addWin';
import { subtractPlayerWin, subtractTeamWin } from '../actions/subtractWin';

import Leaderboard from '../components/leaderboard';

import '../../style/leaderboard.css';

class LeaderboardContainer extends Component {
    componentDidMount(){
        this.props.getTeamLeaderboard();
        this.props.getPlayerLeaderboard();
    }

    onInputChange(term) {
        this.props.onSearchTextChange(term);
    }

    render() {
        return (
            <div>
                <div className="search">
                    <input
                        value={this.props.teamSearchText, this.props.playerSearchText}
                        onChange={(event) => this.onInputChange(event.target.value)} />
                </div>
                <div className="leaderboard">
                    <div className="team-leaderboard">
                        <Leaderboard
                            columnHeadings={["Team", "", "Wins", " "]}
                            tableData={this.props.teamLeaderboard}
                            addWin={this.props.addTeamWin}
                            subtractWin={this.props.subtractTeamWin}
                        />
                    </div>
                    <div className="team-leaderboard">
                        <Leaderboard
                            columnHeadings={["Player", "", "Wins", " "]}
                            tableData={this.props.playerLeaderboard}
                            addWin={this.props.addPlayerWin}
                            subtractWin={this.props.subtractPlayerWin}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    const {teamLeaderboard, teamSearchText} = state.teamLeaderboard;
    const {playerLeaderboard, playerSearchText} = state.playerLeaderboard;
    return {
        teamLeaderboard: teamLeaderboard.filter((team) => {
            return team.Name.toLowerCase().includes(teamSearchText.toLowerCase());
        }),
        playerLeaderboard: playerLeaderboard.filter((player) => {
            return player.Name.toLowerCase().includes(playerSearchText.toLowerCase());
        }),
        playerSearchText: playerSearchText,
        teamSearchText: teamSearchText
    }
}

export default connect(mapStateToProps,
    { onSearchTextChange,
        getTeamLeaderboard,
        getPlayerLeaderboard,
        addPlayerWin,
        addTeamWin,
        subtractPlayerWin,
        subtractTeamWin
    })(LeaderboardContainer);