import React, { Component } from 'react'

export class ProductItems extends Component {
    render() {
        const { product } = this.props
        return (
            <div>
                <li key={product.id}>
                    {product.name} - {product.price}
                </li>
            </div>
        )
    }
}

export default ProductItems
