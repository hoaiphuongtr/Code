import React from 'react'
import PropTypes from 'prop-types'
class Layout extends React.Component {
    render() {
        console.log(this.props)
        return <div className='layout-children'>{this.props.children}</div>
    }
}
// export default function Layout(props) {
//     return <div className='layout-children'>{props.children}</div>;
// }
Layout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default Layout
