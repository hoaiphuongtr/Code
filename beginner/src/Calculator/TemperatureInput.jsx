import React, { Component } from 'react';

export class TemperatureInput extends Component {
    handleTemperatureChange = (event) => {
        this.props.onTemperatureChange(event.target.value);
    };
    render() {
        const { title, temperature } = this.props;
        return (
            <fieldset>
                <legend>Enter Temperature in {title}</legend>
                <input
                    value={temperature}
                    onChange={this.handleTemperatureChange}
                />
            </fieldset>
        );
    }
}

export default TemperatureInput;
