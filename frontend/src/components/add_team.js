import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import '../../style/add_player.css';

import { addTeam } from '../actions/addTeam'

class AddTeam extends Component {
    renderTeamNameField(field) {
        return (
            <div className="add-player-input">
                <input
                    type="text"
                    {...field.input}
                />
                {field.meta.error}
            </div>
        );
    }

    onSubmit(values){
        this.props.addTeam(values);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    name="team_name"
                    component={this.renderTeamNameField}
                />
                <button type="submit" className="submit-button"> SUBMIT </button>
            </form>
        )
    }
}

// Called onSubmit
function validate(values) {
    const errors = {};

    if(!values.team_name){
        errors.team_name = "Enter a name";
    }

    return errors;
}

export default reduxForm({
    form: 'addTeamForm'
})(
    connect(null, { addTeam })(AddTeam)
);