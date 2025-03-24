import React from 'react'
//functional component
// function Welcome(props) {
//     return <div>Hello, {props.name}!</div>
// }

class Welcome extends React.Component {
    render() {
        return <div>Hello, {this.props.name}!</div>
    }
}
export default Welcome
