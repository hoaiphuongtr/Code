import React, { Component } from 'react'
const fetchListJob = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(['FE', 'BE', 'Tester', 'FS'])
        }, 1000)
    })
export class CorrectlyState extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            list: [],
        }
    }
    componentDidMount() {
        console.log('componentDidMount')
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }))
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }))
        fetchListJob().then((res) => {
            this.setState(() => ({
                list: res,
            }))
        })
    }
    render() {
        console.log('render')
        console.log(this.state)
        return <div>CorrectlyState : {this.state.count}</div>
    }
}

export default CorrectlyState
