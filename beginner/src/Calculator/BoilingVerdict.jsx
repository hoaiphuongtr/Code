import React, { Component } from 'react';

export class BoilingVerdict extends Component {
    render() {
        console.log(this.props.celsius);
        return (
            <div>
                {this.props.celsius >= 100
                    ? 'The water would boil'
                    : 'The water would not boil'}
            </div>
        );
    }
}

export default BoilingVerdict;
