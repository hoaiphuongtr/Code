import React from 'react'
//functional component
function Welcome(props) {
    console.log(props)
    return (
        <div>
            Hello, {props.name}! You are {props.age}
        </div>
    )
}

// class Welcome extends React.Component {
//     render() {
//         console.log(this.props);
//         return (
//             <div>
//                 Hello, {this.props.name}. You are {this.props.age}!
//             </div>
//         );
//     }
// }
export default Welcome
