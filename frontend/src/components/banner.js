import React, { Component } from 'react';

import '../../style/banner.css';

class Banner extends Component {
    parseURL() {
        switch(window.location.pathname) {
            case "/": return "Leaderboard"; break;
            case "/addPlayer": return "Add a player"; break;
            case "/addTeam": return "Add a team"; break;
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