import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../style/toolbar.css'

class Toolbar extends Component {
    render() {
        return (
            <div className="nav">
                <h1 className="nav-titles"><Link to="/" className="nav-title"> Ping Pong </Link></h1>
                <div className="nav-links">
                    <Link to="/addPlayer" className="nav-link"> Add Player </Link>
                    <Link to="/addTeam" className="nav-link"> Add Team </Link>
                </div>
            </div>
        )
    }
}

export default Toolbar;