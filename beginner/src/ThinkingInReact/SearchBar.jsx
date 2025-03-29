import React, { Component } from 'react';

export class SearchBar extends Component {
    render() {
        const { searchText, isInStock, handleChange } = this.props;
        return (
            <form>
                <input
                    type='text'
                    placeholder='Search...'
                    value={searchText}
                    name='productName'
                    onChange={handleChange}
                />
                <div>
                    <input
                        type='checkbox'
                        name='isInStock'
                        value={isInStock}
                        onChange={handleChange}
                    />
                    Only show products in stock
                </div>
            </form>
        );
    }
}

export default SearchBar;
