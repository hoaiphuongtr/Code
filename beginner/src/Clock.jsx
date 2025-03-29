import React from 'react'
const list = ['BMW', 'Toyota', 'Honda']
const fetchAPI = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(list)
        }, 1000)
    })
}
export default class Clock extends React.Component {
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            time: {
                created: new Date().toLocaleTimeString(),
            },
            second: {
                created: new Date().getSeconds(),
            },
            list: [],
            darkMode: false,
        }
        this.date = new Date().toDateString()
        this.getTime = this.getTime.bind(this)
    }
    getTime() {
        const newState = {
            ...this.state,
            time: {
                created: new Date().toLocaleTimeString(),
            },
            second: {
                created: new Date().getSeconds(),
            },
        }
        this.setState(newState)
    }
    toggleDarkMode = () => {
        this.setState((prevState) => ({
            ...prevState,
            darkMode: !prevState.darkMode,
        }))
    }
    componentDidMount() {
        // const seconds = document.getElementById('seconds');
        console.log('componentDidMount')
        fetchAPI().then((res) => {
            this.setState((prevState) => ({
                ...prevState,
                list: res,
            }))
        })
    }
    componentDidUpdate() {
        // if (this.state.darkMode) {
        //     const val = document.querySelector('input').value;
        //     console.log(val);
        // }
        console.log('componentDidUpdate')
        if (this.state.list.length === 0) {
            fetchAPI().then((res) => {
                this.setState((prevState) => ({
                    ...prevState,
                    list: res,
                }))
            })
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        console.log('render')
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.time.created}</h2>
                <h2 id='seconds'>It is {this.state.second.created}</h2>
                <h3>It is {this.date}</h3>
                <button onClick={this.getTime}>Get Time</button>
                <button onClick={this.toggleDarkMode}>Toggle</button>
                {this.state.darkMode && <input value={this.state.darkMode} type='text' />}
            </div>
        )
    }
}
