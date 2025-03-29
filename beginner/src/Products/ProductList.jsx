import React, { Component } from 'react'
import ProductItems from './ProductItems'

export class ProductList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [
                {
                    id: 1,
                    name: 'Iphone',
                    price: '1000$',
                },
                {
                    id: 2,
                    name: 'Samsung',
                    price: '800$',
                },
                {
                    id: 3,
                    name: 'Oppo',
                    price: '350$',
                },
            ],
        }
    }
    sortList = () => {
        this.setState((prevState) => ({
            products: prevState.products.sort((a, b) => {
                if (a.name > b.name) return 1
                if (a.name < b.name) return -1
                return 0
            }),
        }))
    }
    addList = () => {
        this.setState((prevState) => ({
            products: [...prevState.products, { id: 4, name: 'Xiaomi', price: '400$' }],
        }))
    }
    render() {
        const list = this.state.products.map((product) => <ProductItems key={product.id} product={product} />)
        return (
            <div className='productList'>
                <h1 className='title'>Product List: </h1>
                <ul>{list}</ul>
                <button onClick={this.sortList}>Sort List</button>
                <button onClick={this.addList}>Add List</button>
            </div>
        )
    }
}

export default ProductList
