import React from 'react'
import PropTypes from 'prop-types'

class BareInput extends React.Component {
    render() {
        const { type: typeInput, ...res } = this.props
        console.log('BareInput props:', this.props)

        return <input {...res} type={typeInput} />
    }
}

BareInput.propTypes = {
    type: PropTypes.string.isRequired,
}
export default BareInput
