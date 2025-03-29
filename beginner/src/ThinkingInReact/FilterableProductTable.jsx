import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import styles from './style.module.css';

//---------------------------------------------
//main-content
const productListMock = [
    {
        category: 'Sporting Goods',
        price: '$49.99',
        stocked: true,
        name: 'Football'
    },
    {
        category: 'Sporting Goods',
        price: '$9.99',
        stocked: true,
        name: 'Baseball'
    },
    {
        category: 'Sporting Goods',
        price: '$29.99',
        stocked: false,
        name: 'Basketball'
    },
    {
        category: 'Electronics',
        price: '$129',
        stocked: true,
        name: 'Airpod 4'
    },
    {
        category: 'Electronics',
        price: '$1369',
        stocked: false,
        name: 'Iphone 16 Pro Max'
    },
    {
        category: 'Electronics',
        price: '$3440',
        stocked: true,
        name: 'Playstation 5 Pro Limited Edition'
    },
    {
        category: 'Sporting Goods',
        price: '$241',
        stocked: false,
        name: 'Racquet Astrox 100ZZ'
    }
];
const fetchProductList = () => Promise.resolve(productListMock);

export class FilterableProductTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productList: [],
            searchText: '',
            isInStock: false
        };
    }
    componentDidMount() {
        fetchProductList().then((res) => {
            this.setState({
                productList: res
            });
        });
    }
    handleChange = (event) => {
        const name = event.target.name;
        if (name === 'productName') {
            this.setState({
                searchText: event.target.value
            });
        } else {
            this.setState({
                isInStock: event.target.checked
            });
        }
    };
    render() {
        const { productList, searchText, isInStock } = this.state;
        console.log(productList);
        return (
            <div className={styles.FilterableProductTable}>
                <SearchBar
                    handleChange={this.handleChange}
                    searchText={searchText}
                    inStock={isInStock}
                />
                <ProductTable
                    list={productList}
                    searchText={searchText}
                    inStock={isInStock}
                />
            </div>
        );
    }
}

export default FilterableProductTable;
