import React, { Component } from 'react';

import '../../style/banner.css';

class Banner extends Component {
    // TODO move this title to state
    parseURL() {
        switch(window.location.pathname) {
            case "/": return "LEADERBOARD"; break;
            case "/addPlayer": return "ADD A PLAYER"; break;
            case "/addTeam": return "ADD A TEAM"; break;
            default: return "";
        }
    }

    render() {
        return (
            <div className="banner">
                <img className="logo" src="../assets/pingpong_icon.png" alt="Ping Pong Paddles" />
                <div className="banner-title">
                    {this.parseURL()}
                </div>
            </div>
        )
    }
}

export default Banner;