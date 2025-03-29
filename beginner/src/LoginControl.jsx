import React from 'react'
class LogIn extends React.Component {
    render() {
        return <button onClick={this.props.onClick}>LogIn</button>
    }
}
class LogOut extends React.Component {
    render() {
        return <button onClick={this.props.onClick}>LogOut</button>
    }
}
export default class LoginControl extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true,
        }
    }
    handleLogIn = () => {
        this.setState({
            isLoggedIn: true,
        })
    }
    handleLogOut = () => {
        this.setState({
            isLoggedIn: false,
        })
    }
    render() {
        const { isLoggedIn } = this.state
        return (
            <div className='Login-control'>
                {!isLoggedIn ? <LogIn onClick={this.handleLogIn} /> : <LogOut onClick={this.handleLogOut} />}
            </div>
        )
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
}
