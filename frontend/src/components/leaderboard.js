import React, { Component } from 'react';

import '../../style/leaderboard.css';

class Leaderboard extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(name, wins) {
        this.props.addWin(name, wins);
    }

    renderColumnHeadings(column_titles) {
        return column_titles.map((title) => {
            return (
                <th key={title}> {title} </th>
            );
        })
    }

    renderRows(table_data) {
        if(table_data.length === 0){
            return (
                <tr><td>No data</td><td>-</td><td></td></tr>
            );
        } else {
            return table_data.map((team) => {
                return (
                    <tr key={team.Name}>
                        <td>{team.Name}</td>
                        <td>{team.Wins}</td>
                        <td>
                            <button onClick={this.onSubmit.bind(this, team.Name, team.Wins)} className="leaderboard-button">+</button>
                        </td>
                    </tr>
                );
            })
        }
    }

    render() {
        return (
            <table>
                <thead>
                <tr>
                    {this.renderColumnHeadings(this.props.columnHeadings)}
                </tr>
                </thead>
                <tbody>
                    {this.renderRows(this.props.tableData)}
                </tbody>
            </table>
        )
    }
}



export default Leaderboard;