import React, { Component, createRef } from 'react'

export class UncontrolledComponent extends Component {
    constructor(props) {
        super(props)

        this.usernameInput = createRef()
        this.fileInput = createRef()
        this.state = {
            selectedFile: null,
            // name: undefined //warning here
            name: '', //must be an initial value
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        // console.log(this.usernameInput.current.value);
        // console.log(document.getElementById('name').value);
        const dataInput = new FormData()
        dataInput.append('file', this.state.selectedFile, this.state.selectedFile.name)
        console.log(this.state)
        // axios.post('api/uploadFile',dataInput)
    }
    handleFileChange = (event) => {
        this.setState({ selectedFile: event.target.files[0] })
        console.log(event.target.files[0])
    }
    handleNameInput = (event) => {
        this.setState({
            //name: null //warning here, avoid an undefined or null input
            name: event.target.value,
        })
    }
    render() {
        return (
            <div>
                <h1 className='title'>Uncontrolled Component</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input
                            type='text'
                            ref={this.usernameInput}
                            id='name'
                            value={this.state.name}
                            onChange={this.handleNameInput}
                        />
                    </label>
                    <input type='file' onChange={this.handleFileChange} ref={this.fileInput} />
                    <input type='submit' value='submit' />
                </form>
            </div>
        )
    }
}

export default UncontrolledComponent
