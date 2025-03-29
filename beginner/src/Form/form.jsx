import React, { Component } from 'react'

export class form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            address: '',
            fruit: '',
            isMarriage: true,
            isMale: true,
        }
    }
    handleChange = (event) => {
        // console.log(event);
        const { target } = event
        // console.log(target);
        const value = target.type === 'checkbox' ? target.checked : target.value
        const { name } = target
        this.setState({
            [name]: value,
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        First Name:
                        <input
                            type='text'
                            name='name'
                            placeholder='Enter your first name...'
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </label>

                    <button type='submit'>Submit</button>
                </form>
                <textarea name='address' value={this.state.address} onChange={this.handleChange} />
                <select onChange={this.handleChange} value={this.state.fruit} name='fruit'>
                    <option value='Mango'>Mango</option>
                    <option value='Coconut'>Coconut</option>
                    <option value='Grape'>Grape</option>
                    <option value='Lime'>Lime</option>
                </select>
                <input type='checkbox' name='isMarriage' onChange={this.handleChange} />
                <div className='sex'>
                    <div className='male'>
                        <h3 name='Male'>Male</h3>
                        <input type='radio' name='isMale' onChange={this.handleChange} value={true} />
                    </div>
                    <div className='female'>
                        <h3 name='Female'>Female</h3>
                        <input type='radio' name='isMale' onChange={this.handleChange} value={false} />
                    </div>
                </div>
            </div>
        )
    }
}

export default form
