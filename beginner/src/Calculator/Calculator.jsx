import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';
const scaleNames = {
    C: 'Celsius',
    F: 'Fahrenheit'
};
const toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) / 1.8;
};
const toFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
};
const tryConvert = (temperature, convertFunc) => {
    const input = parseFloat(temperature); //avoid empty string, instead using Number, we use parseFloat
    if (Number.isNaN(input)) {
        return '';
    }
    let output = convertFunc(input);
    return Math.round(output * 1000) / 1000;
};
export class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            temperature: '',
            scale: 'C'
        };
    }
    /*Currying*/
    handleChange = (scale) => (value) => {
        this.setState({ temperature: value, scale: scale });
    };
    render() {
        //Destructuring
        const { temperature, scale } = this.state;
        const celsius =
            scale === 'F' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit =
            scale === 'C' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput
                    title={scaleNames.C}
                    temperature={celsius}
                    onTemperatureChange={this.handleChange('C')}
                />
                <TemperatureInput
                    title={scaleNames.F}
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleChange('F')}
                />
                <BoilingVerdict celsius={Number(celsius)} />
            </div>
        );
    }
}

export default Calculator;
