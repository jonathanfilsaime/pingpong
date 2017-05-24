import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import '../../style/add_player.css';

import { addPlayer } from '../actions/addPlayer'

class AddPlayer extends Component {
    renderPlayerNameField(field) {
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
        this.props.addPlayer(values);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    name="player_name"
                    component={this.renderPlayerNameField}
                />
                <button type="submit" className="submit-button"> SUBMIT </button>
            </form>
        )
    }
}

// Called onSubmit
function validate(values) {
    const errors = {};

    if(!values.player_name){
        errors.player_name = "Enter a name";
    }

    return errors;
}

export default reduxForm({
    form: 'addPlayerForm'
})(
    connect(null, { addPlayer })(AddPlayer)
);